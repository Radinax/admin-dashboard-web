import { ReactNode } from "react";

import { createContext } from "react";

interface AuthContextProps {
  isLoggedIn: boolean;
}

export const AuthContext = createContext<AuthContextProps>(null!);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const authState = {
    isLoggedIn: false,
  };
  return (
    <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
  );
};
