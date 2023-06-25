import { createContext, useState } from 'react';

interface AuthContext {
  loggedIn: boolean,
  authToken: string,
  userName: string,
  userId: string,
  setloggedIn: (loggedIn: boolean) => void,
  setAuthToken: (authToken: string) => void,
  setUserName: (userName: string) => void,
  setUserId: (userId: string) => void
}

export const AuthContext = createContext<AuthContext>({
  loggedIn: false,
  authToken: '',
  userName: '',
  userId: '',
  setloggedIn: () => {/**/},
  setAuthToken: () => {/**/},
  setUserName: () => {/**/},
  setUserId: () => {/**/},
});

export const AuthState = ({ children }: { children: React.ReactNode }) => {
  const [loggedIn, setloggedIn] = useState(false);
  const [authToken, setAuthToken] = useState('');
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');

  return (
    <AuthContext.Provider value={{ loggedIn, authToken, userName, userId, setloggedIn, setAuthToken, setUserName, setUserId }}>
      { children }
    </AuthContext.Provider>
  );
}