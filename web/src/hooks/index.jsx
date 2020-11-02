import React from 'react';
import { AuthProvider } from './AuthContext';

const AppProvider = ({ children }) => {
  return(
    <AuthProvider>
     {children}
    </AuthProvider>
  );
}

export default AppProvider;
