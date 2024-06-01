import React, { createContext } from 'react';
import { useRouter } from 'next/router';

interface AuthContextType {
  signup: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();

  const signup = async (email: string, password: string) => {
    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Failed to signup');
    }

    router.push('/plans');
  };

  const login = async (email: string, password: string) => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Failed to login');
    }

    router.push('/plans');
  }

  return (
    <AuthContext.Provider value={{ signup }}>
      {children}
    </AuthContext.Provider>
  );
};