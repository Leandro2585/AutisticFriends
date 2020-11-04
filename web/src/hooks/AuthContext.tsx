import React, {
  useState,
  useCallback,
  useContext,
  createContext
} from 'react';
import api from '../services/api';

interface AuthState {
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: {
    id: number;
    name: string;
    email: string;
  };
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);
const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@AutisticFriends:token');
    const user = localStorage.getItem('@AutisticFriends:user');
    if(token && user){
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/session', {
      email,
      password
    });
    const { token, user } = response.data;
    localStorage.setItem('@AutisticFriends:token', token);
    localStorage.setItem('@AutisticFriends:user', JSON.stringify(user));
    api.defaults.headers.authorization = `Bearer ${token}`;
    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@AutisticFriends:token');
    localStorage.removeItem('@AutisticFriends:user');
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if(!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
