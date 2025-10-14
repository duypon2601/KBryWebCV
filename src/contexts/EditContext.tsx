import React, { useState } from 'react';
import type { ReactNode } from 'react';
import { EditContext } from './EditContextCore.js';

interface EditProviderProps {
  children: ReactNode;
}

export const EditProvider: React.FC<EditProviderProps> = ({ children }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Simple password authentication - in production, use proper auth
  const ADMIN_PASSWORD = 'admin123'; // Change this to your desired password

  const toggleEditMode = () => {
    if (isAuthenticated) {
      setIsEditMode(!isEditMode);
    }
  };

  const login = (password: string): boolean => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setIsEditMode(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setIsEditMode(false);
  };

  return (
    <EditContext.Provider
      value={{
        isEditMode,
        toggleEditMode,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </EditContext.Provider>
  );
};
