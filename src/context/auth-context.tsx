import { ReactNode, createContext } from "react";

interface AuthContextProps {
  isLoggedIn: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const AuthContext = createContext<AuthContextProps>(null!);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const authState = {
    isLoggedIn: true,
  };
  return (
    <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
  );
};
