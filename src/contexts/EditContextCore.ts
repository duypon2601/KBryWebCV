import { createContext, useContext } from 'react';

export interface EditContextType {
  isEditMode: boolean;
  toggleEditMode: () => void;
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

export const EditContext = createContext<EditContextType | undefined>(undefined);

export const useEdit = (): EditContextType => {
  const context = useContext(EditContext);
  if (context === undefined) {
    throw new Error('useEdit must be used within an EditProvider');
  }
  return context;
};


