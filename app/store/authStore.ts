// app/store/authStore.ts
import { create } from "zustand";

interface UserData {
  id: string;
  userName: string;
  email: string;
  normalizedEmail: string;
  emailConfirmed: boolean;
  phoneNumber: string;
  phoneNumberConfirmed: boolean;
  twoFactorEnabled: boolean;
  lockoutEnd: string | null;
  lockoutEnabled: boolean;
  accessFailedCount: number;
  roleId: string;
  roleName: string;
  createdAt: string;
  updatedAt: string | null;
  lastAccessAt: string;
}

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  tokenType: string | null;
  expiresIn: number | null;
  tokenExpiry: number | null;
  user: UserData | null;
  login: (email: string, password: string) => Promise<boolean>;
  refreshAccessToken: () => Promise<string>;
  getValidToken: () => Promise<string>;
  logout: () => void;
  handleSuccessfulLogin: (responseData: any) => boolean;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

const API_URL = "http://207.58.175.220:9568";

export const useAuthStore = create<AuthState>((set, get) => ({
  accessToken: null,
  refreshToken: null,
  tokenType: null,
  expiresIn: null,
  tokenExpiry: null,
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,

  login: async (email: string, password: string) => {
    set({ isLoading: true, error: null });

    try {
      // Use test credentials for now
      const loginData = {
        email: "jose@gmail.com",
        password: "Aa12345678@",
        twoFactorCode: "string",
        twoFactorRecoveryCode: "string",
      };

      console.log("Attempting login...");

      // First, authenticate the user to get the initial tokens
      const authResponse = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(loginData),
      });

      console.log("Login response status:", authResponse.status);

      if (!authResponse.ok) {
        const errorText = await authResponse.text();
        console.error(
          "Login failed with status:",
          authResponse.status,
          "Response:",
          errorText
        );

        let errorMessage =
          "Error al iniciar sesión. Verifica tus credenciales.";
        try {
          const errorData = JSON.parse(errorText);
          if (errorData.detail) {
            errorMessage = errorData.detail;
          }
        } catch (e) {
          console.error("Error parsing error response:", e);
        }

        throw new Error(errorMessage);
      }

      const authData = await authResponse.json();

      // Log only non-sensitive auth data
      console.log(
        "Auth response received. Token type:",
        authData.tokenType || "Bearer"
      );

      if (!authData.accessToken) {
        console.error("Invalid auth response:", authData);
        throw new Error("No se recibió un token de acceso válido");
      }

      // Store tokens in the auth store
      const expiresIn = authData.expiresIn || 1800;
      set({
        accessToken: authData.accessToken,
        refreshToken: authData.refreshToken,
        tokenType: authData.tokenType || "Bearer",
        expiresIn: expiresIn,
        tokenExpiry: Date.now() + expiresIn * 1000,
        isAuthenticated: true,
      });

      // Now get the user data using the new token
      const userResponse = await fetch(
        `${API_URL}/api/v1/user/get-by-email?email=${encodeURIComponent(
          email
        )}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authData.accessToken}`,
          },
        }
      );

      if (!userResponse.ok) {
        const errorMessage =
          userResponse.status === 404
            ? "Usuario no encontrado"
            : "Error al obtener los datos del usuario. Por favor, inténtalo de nuevo.";

        set({
          error: errorMessage,
          isLoading: false,
          isAuthenticated: false,
          user: null,
        });
        return false;
      }

      const userData = await userResponse.json();

      // Create a safe copy of user data for logging (remove sensitive fields if any)
      const safeUserData = { ...userData };
      // Remove any sensitive fields you don't want to log
      delete safeUserData.password;
      delete safeUserData.twoFactorCode;
      delete safeUserData.recoveryCode;

      console.log("User data response:", JSON.stringify(safeUserData, null, 2));

      // Combine auth and user data
      const responseData = {
        ...userData,
        auth: {
          accessToken: authData.accessToken,
          refreshToken: authData.refreshToken,
          tokenType: authData.tokenType || "Bearer",
          expiresIn: authData.expiresIn || 1800,
        },
      };

      return get().handleSuccessfulLogin(responseData);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Error al iniciar sesión";
      set({
        error: errorMessage,
        isLoading: false,
        isAuthenticated: false,
        user: null,
      });
      return false;
    }
  },

  handleSuccessfulLogin: (responseData: any) => {
    if (!responseData.isSuccess) {
      throw new Error("Usuario no existe o las credenciales son incorrectas");
    }

    const userData: UserData = responseData.data;
    const authData = responseData.auth;

    // Set user role based on email
    const updatedUserData = {
      ...userData,
      roleName: userData.email === "jose@gmail.com" ? "Admin" : "User",
    };

    if (authData) {
      const expiresIn = authData.expiresIn || 1800;
      const expiryTime = Date.now() + expiresIn * 1000;

      // Save to localStorage for persistence
      if (typeof window !== "undefined") {
        localStorage.setItem("authToken", authData.accessToken);
        localStorage.setItem("refreshToken", authData.refreshToken || "");
        localStorage.setItem("user", JSON.stringify(updatedUserData));
        localStorage.setItem("tokenExpiry", expiryTime.toString());
      }

      // Update the auth state
      set({
        user: updatedUserData,
        accessToken: authData.accessToken,
        refreshToken: authData.refreshToken,
        tokenType: authData.tokenType || "Bearer",
        expiresIn: expiresIn,
        tokenExpiry: expiryTime,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });

      return true;
    }

    // If no auth data, still update the user state but don't mark as authenticated
    set({
      user: updatedUserData,
      isAuthenticated: false,
      isLoading: false,
      error: null,
    });
    return false;
  },

  refreshAccessToken: async () => {
    const { refreshToken } = get();
    if (!refreshToken) {
      console.error("No refresh token available for refresh");
      // Redirect to login if no refresh token is available
      if (typeof window !== "undefined") {
        window.location.href = "/login";
      }
      throw new Error("No refresh token available");
    }

    try {
      console.log("Attempting to refresh token...");
      const response = await fetch(`${API_URL}/refresh`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${refreshToken}`,
        },
        body: JSON.stringify({ refreshToken }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(
          "Refresh token failed with status:",
          response.status,
          "Response:",
          errorText
        );
        throw new Error("Failed to refresh token");
      }

      const data = await response.json();
      console.log("Token refresh response:", data);

      if (!data.accessToken) {
        console.error("No access token in refresh response:", data);
        throw new Error("Invalid token response format");
      }

      const expiresIn = data.expiresIn || 1800;
      const newState: Partial<AuthState> = {
        accessToken: data.accessToken,
        refreshToken: data.refreshToken || refreshToken,
        tokenType: data.tokenType || "Bearer",
        expiresIn: expiresIn,
        tokenExpiry: Date.now() + expiresIn * 1000,
        isAuthenticated: true,
      };

      console.log("Token refreshed successfully");
      set(newState);
      return data.accessToken;
    } catch (error) {
      console.error("Refresh token error:", error);
      get().logout();
      throw new Error("Session expired. Please log in again.");
    }
  },

  getValidToken: async () => {
    const { accessToken, tokenExpiry, refreshAccessToken } = get();

    // If we have a token that's still valid for more than 5 minutes, return it
    if (accessToken && tokenExpiry && tokenExpiry - Date.now() > 300000) {
      return accessToken;
    }

    // Otherwise try to refresh the token
    try {
      console.log("Getting new valid token...");
      const newToken = await refreshAccessToken();
      console.log("Successfully obtained new token");
      return newToken;
    } catch (error) {
      console.error("Failed to refresh token:", error);
      // Only redirect if we're not already on the login page
      if (
        typeof window !== "undefined" &&
        !window.location.pathname.includes("/login")
      ) {
        window.location.href = "/login";
      }
      throw new Error("Session expired. Please log in again.");
    }
  },

  logout: () => {
    set({
      accessToken: null,
      refreshToken: null,
      tokenType: null,
      expiresIn: null,
      tokenExpiry: null,
      user: null,
      isAuthenticated: false,
      error: null,
    });
  },
}));
