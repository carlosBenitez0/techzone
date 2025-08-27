// app/store/userStore.ts
import { create } from "zustand";
import { useAuthStore } from "./authStore";

interface UserRegistration {
  name: string;
  email: string;
  phoneNumber: string;
  lockoutEnabled: boolean;
  twoFactorEnabled: boolean;
  password: string;
  confirmPassword?: string;
  roleName: string;
}

interface UserState {
  register: (
    userData: Omit<
      UserRegistration,
      "lockoutEnabled" | "twoFactorEnabled" | "roleName"
    > & { confirmPassword: string }
  ) => Promise<boolean>;
  loading: boolean;
  error: string | null;
  success: boolean;
}

const API_URL = "http://207.58.175.220:9568/api/v1";

export const useUserStore = create<UserState>((set) => ({
  loading: false,
  error: null,
  success: false,

  register: async (userData) => {
    // Validate input
    if (
      !userData.name ||
      !userData.email ||
      !userData.password ||
      !userData.confirmPassword
    ) {
      set({ error: "Todos los campos son requeridos" });
      return false;
    }

    // Password match validation
    if (userData.password !== userData.confirmPassword) {
      set({ error: "Las contraseñas no coinciden" });
      return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userData.email)) {
      set({ error: "Por favor ingresa un correo electronico valido" });
      return false;
    }

    // Password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?!.*\s).{8,}$/;
    if (!passwordRegex.test(userData.password)) {
      set({
        error:
          "La contraseña debe tener al menos 8 caracteres y contener al menos una mayuscula, una minuscula, un numero y un caracter especial",
      });
      return false;
    }

    set({ loading: true, error: null, success: false });

    try {
      // Get auth store state
      const authStore = useAuthStore.getState();
      let { accessToken, refreshAccessToken } = authStore;

      // Function to make the registration request
      const makeRequest = async (token: string) => {
        const payload = {
          name: userData.name,
          email: userData.email,
          password: userData.password,
          phoneNumber: "00000000",
          lockoutEnabled: true,
          twoFactorEnabled: true,
          roleName: "User",
        };

        console.log("Enviando solicitud de registro con token:", token);

        const response = await fetch(`${API_URL}/user/create`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        });

        return { response, status: response.status };
      };

      // First try with current token
      let response, status;

      try {
        const result = await makeRequest(accessToken || "");
        console.log(result);
        response = result.response;
        status = result.status;
      } catch (error) {
        console.error("Initial request failed:", error);
        throw new Error("Network error. Please try again.");
      }

      // If token is expired, try to refresh it
      if (status === 401) {
        try {
          console.log("Token expired, attempting to refresh...");
          const newToken = await refreshAccessToken();
          console.log("Token refreshed successfully");

          // Retry with new token
          const retryResult = await makeRequest(newToken);
          response = retryResult.response;
          status = retryResult.status;
        } catch (refreshError) {
          console.error("Token refresh failed:", refreshError);

          // If refresh fails, try to log in again
          try {
            console.log("Attempting to log in again...");
            await authStore.login("jose@gmail.com", "Aa12345678@");
            const retryResult = await makeRequest(authStore.accessToken!);
            response = retryResult.response;
            status = retryResult.status;
          } catch (loginError) {
            console.error("Re-login failed:", loginError);
            throw new Error("Session expired. Please try again.");
          }
        }
      }

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.log("Registration failed");
      }

      set({ success: true });
      return true;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred";
      set({ error: errorMessage });
      return false;
    } finally {
      set({ loading: false });
    }
  },
}));
