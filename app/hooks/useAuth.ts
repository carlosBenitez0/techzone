import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

interface User {
  id?: number;
  name?: string;
  email: string;
  password: string;
}

export const useAuth = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<User>({
    id: 0,
    name: "",
    email: "",
    password: "",
  });
  const [registeredUsers, setRegisteredUsers] = useState<User[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const [isAdmin, setIsAdmin] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Cargar estado inicial de localStorage
  useEffect(() => {
    const savedUserData = localStorage.getItem('userData');
    const savedRegisteredUsers = localStorage.getItem('registeredUsers');
    const savedIsAuthenticated = localStorage.getItem('isAuthenticated');
    const savedIsAdmin = localStorage.getItem('isAdmin');

    if (savedUserData) setUserData(JSON.parse(savedUserData));
    if (savedRegisteredUsers) setRegisteredUsers(JSON.parse(savedRegisteredUsers));
    if (savedIsAuthenticated) setIsAuthenticated(savedIsAuthenticated === 'true');
    if (savedIsAdmin) setIsAdmin(savedIsAdmin === 'true');
  }, []);

  // Guardar cambios en localStorage
  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData));
  }, [userData]);

  useEffect(() => {
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
  }, [registeredUsers]);

  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated.toString());
    // Actualizar el estado de autenticación en el localStorage cuando cambie
    if (isAuthenticated) {
      localStorage.setItem('userData', JSON.stringify(userData));
    } else {
      localStorage.removeItem('userData');
    }
  }, [isAuthenticated, userData]);

  useEffect(() => {
    localStorage.setItem('isAdmin', isAdmin.toString());
  }, [isAdmin]);

  const register = async (user: User) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const newUser = { ...user, id: Date.now() };
      setRegisteredUsers((prev) => [...prev, newUser]);
      setUserData(newUser);
      setIsAuthenticated(true);
      router.push("/"); // Redirección SPA
    } catch (err) {
      setError(`Error: ${err}`);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (user: User) => {
    try {
      setIsLoading(true);
      setError(null);

      // 1. Check admin
      if (user.email === "admin@gmail.com" && user.password === "admin123") {
        setIsAuthenticated(true);
        setIsAdmin(true);
        router.push("/admin"); // Redirección SPA
        return;
      }

      // 2. Check demo user
      if (user.email === "demo@gmail.com" && user.password === "demo123") {
        setIsAuthenticated(true);
        setIsAdmin(false);
        router.push("/");
        return;
      }

      // 3. Check registered users
      const foundUser = registeredUsers.find(
        (u) => u.email === user.email && u.password === user.password
      );

      if (foundUser) {
        setIsAuthenticated(true);
        setIsAdmin(false);
        setUserData(foundUser);
        router.push("/");
        return;
      }

      setError("Credenciales inválidas");
    } catch (err) {
      setError(`Error: ${err}`);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setIsAdmin(false);
    router.push("/");
  };

  return {
    login,
    register,
    logout,
    setIsLoading,
    setError,
    userData,
    isAuthenticated,
    isAdmin,
    isLoading,
    error,
  };
};
