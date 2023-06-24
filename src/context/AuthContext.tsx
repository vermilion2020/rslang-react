import { createContext, useState } from 'react';

interface AuthContext {
  loggedIn: boolean,
  authToken: string,
  userName: string,
  setloggedIn: (loggedIn: boolean) => void,
  setAuthToken: (authToken: string) => void,
  setUserName: (userName: string) => void
}

export const AuthContext = createContext<AuthContext>({
  loggedIn: false,
  authToken: '',
  userName: '',
  setloggedIn: () => {/**/},
  setAuthToken: () => {/**/},
  setUserName: () => {/**/}
});

export const AuthState = ({ children }: { children: React.ReactNode }) => {
  const [loggedIn, setloggedIn] = useState(false);
  const [authToken, setAuthToken] = useState('');
  const [userName, setUserName] = useState('');

  return (
    <AuthContext.Provider value={{ loggedIn, authToken, userName, setloggedIn, setAuthToken, setUserName }}>
      { children }
    </AuthContext.Provider>
  );
}