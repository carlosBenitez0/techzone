"use client"
import { create } from 'zustand'

export interface User {
    id?: number;
    name?: string;
    email: string;
    password: string;
    address?: string;
    phone?: string;
    roll?: string;  // user, admin
}

interface authUser {
    email: string;
    password: string;
}

interface AuthStore {
    userData: User;
    registeredUsers: User[];
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
    setIsLoading: (isLoading: boolean) => void;
    setError: (error: string | null) => void;
    login: (user: User) => Promise<boolean | undefined>;
    register: (user: Omit<User, 'id'>) => Promise<boolean | undefined>;
    updateProfile: (user: User) => void;
    logout: () => void;
    checkAdmin: (user: authUser) => boolean;
}

export const useAuthStore = create<AuthStore>((set, get) => ({
    userData: {
        id: 0,
        name: "",
        email: "",
        password: "",
        address: "",
        phone: "",
        roll: ""
    },
    registeredUsers: [
        {id: 0, name: "demo", email: 'demo@gmail.com', password: 'demo123', roll: 'user'},
        {id: 1, name: "admin", email: 'admin@gmail.com', password: 'admin123', roll: 'admin'}
    ],
    isAuthenticated: false,
    isLoading: false,
    error: null,
    //setters
    setIsLoading: (isLoading: boolean) => set({isLoading: isLoading}),
    setError: (error: string | null) => set({error: error}),

    register: async (user: Omit<User, 'id' | 'roll'>) => {
        set({ isLoading: true, error: null });
        try {
            // Simular llamada a API
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            const { registeredUsers } = get();

            //validaciones
            const userExists = registeredUsers.some(u => u.email === user.email);
            if (userExists) {
                set({error: 'El usuario ya está registrado'})
                set({isLoading: false})
                return false;
            }
            if (!user.name || !user.email || !user.password) {
                set({error: 'Todos los campos son obligatorios'})
                set({isLoading: false})
                return false;
            }
            if (user.name.length < 3) {
                set({error: 'El nombre debe tener al menos 3 caracteres'})
                set({isLoading: false})
                return false;
            }
            if (user.password.length < 4) {
                set({error: 'La contraseña debe tener al menos 4 caracteres'})
                set({isLoading: false})
                return false;
            }
            if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(user.email)) {
                set({error: 'El correo electrónico no es válido'})
                set({isLoading: false})
                return false;
            }

            const newUser = {
                ...user,
                id: registeredUsers.length + 1,
                roll: 'user',
                address: '',
                phone: ''
            };
            
            set((state) => ({
                registeredUsers: [...state.registeredUsers, newUser],
                userData: newUser,
                isAuthenticated: true,
                isLoading: false,
                error: null
            }));

            return true;

        } catch (err) {
            set({ error: 'Error en el registro' });
        } finally {
            set({ isLoading: false });
        }
    },

    checkAdmin: (user: User) => {
        const adminAccounts: User[] = [
            {email: 'admin@gmail.com', password: 'admin123', roll: 'admin', address: '', phone: ''}, 
            {email: 'superuser@gmail.com', password: 'superuser123', roll: 'admin', address: '', phone: ''}
        ];
        return adminAccounts.some(admin => admin.email === user.email && admin.password === user.password && admin.roll === 'admin');
    },

    // Inicio de sesión
    //Omitimos el id y el nombre en el tipado
    login: async (user: authUser) => {
        set({ isLoading: true, error: null });
        try {
            // Simular llamada a API
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            const { registeredUsers } = get();

            //validaciones
            if (!user.email || !user.password) {
                set({error: 'Todos los campos son obligatorios'})
                set({isLoading: false})
                return false;
            }
            if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(user.email)) {
                set({error: 'El correo electrónico no es válido'})
                set({isLoading: false})
                return false;
            }
            if (user.password.length < 4) {
                set({error: 'La contraseña debe tener al menos 4 caracteres'})
                set({isLoading: false})
                return false;
            }

            const userFound = registeredUsers.find(u => u.email === user.email && u.password === user.password);
            
            if (!userFound) {
                set({error: 'Credenciales incorrectas'})
                set({isLoading: false})
                return false;
            }
            
            const isAdminCheck = get().checkAdmin(userFound);
            
            set({
                userData: {
                    id: userFound.id,
                    name: userFound.name,
                    email: userFound.email,
                    password: userFound.password,
                    roll: isAdminCheck ? 'admin' : 'user',
                    address: userFound.address,
                    phone: userFound.phone
                },
                isAuthenticated: true,
                isLoading: false,
                error: null
            });
            return true;
        } catch (error) {
            set({ error: 'Error en el login' });
            console.log(error);
        } finally {
            set({ isLoading: false });
        }
    },

    updateProfile: (user: Omit<User, 'id' | 'roll' | 'password'>) => {
        const { userData } = get();
        set({
            userData: {
                ...userData,
                name: user.name,
                email: user.email,
                address: user.address,
                phone: user.phone
            }
        });
    },

    // Cierre de sesión
    logout: () => {
        set({
            userData: {
                id: 0,
                name: "",
                email: "",
                password: "",
                roll: "",
                address: "",
                phone: ""
            },
            isAuthenticated: false,
            isLoading: false,
            error: null
        });
        return true;
    },
    
}))




  