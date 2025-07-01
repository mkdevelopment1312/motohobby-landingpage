
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  isAdminLoggedIn: boolean;
  loginAttempts: number;
  isBlocked: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);

  const login = (username: string, password: string): boolean => {
    // Placeholder for backend authentication
    // In production, this would call authModule.verifyAdminCredentials()
    const isValidCredentials = username === 'admin' && password === 'admin123';
    
    if (isValidCredentials) {
      setIsAdminLoggedIn(true);
      setLoginAttempts(0);
      return true;
    } else {
      const newAttempts = loginAttempts + 1;
      setLoginAttempts(newAttempts);
      
      if (newAttempts >= 3) {
        setIsBlocked(true);
        setTimeout(() => {
          setIsBlocked(false);
          setLoginAttempts(0);
        }, 300000); // 5 minutes block
      }
      return false;
    }
  };

  const logout = () => {
    setIsAdminLoggedIn(false);
    setLoginAttempts(0);
  };

  return (
    <AuthContext.Provider value={{
      isAdminLoggedIn,
      loginAttempts,
      isBlocked,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};
