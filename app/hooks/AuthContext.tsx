import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthContextType } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const DEMO_USERS = [
  { id: 1, name: 'Demo User', email: 'demo@techzone.com', address: '123 Tech Street, Silicon Valley, CA', phone: '+1 (555) 123-4567' }
];

const ADMIN_USER = {
  id: 999,
  name: 'Administrator',
  email: 'admin@gmail.com',
  address: 'Admin Office',
  phone: '+1 (555) 000-0000',
  isAdmin: true
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('techzone_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check for admin user
    if (email === 'admin@gmail.com' && password === 'admin123') {
      setUser(ADMIN_USER);
      localStorage.setItem('techzone_user', JSON.stringify(ADMIN_USER));
      return true;
    }
    
    // Check for demo user
    const foundUser = DEMO_USERS.find(u => u.email === email);
    if (foundUser && password === 'demo123') {
      setUser(foundUser);
      localStorage.setItem('techzone_user', JSON.stringify(foundUser));
      return true;
    }
    return false;
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newUser: User = {
      id: Date.now(),
      name,
      email,
      address: '',
      phone: ''
    };
    
    setUser(newUser);
    localStorage.setItem('techzone_user', JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('techzone_user');
  };

  const updateProfile = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem('techzone_user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};