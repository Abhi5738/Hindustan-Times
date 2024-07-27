import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type AuthContextType = {
  isLoggedIn: boolean;
  isLoading: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

const initialContextState = {
  isLoggedIn: false,
  isLoading: true,
  setIsLoggedIn: () => {},
};

const AuthContext = createContext<AuthContextType>(initialContextState);

type AuthProviderProps = {
  children: React.ReactNode | React.ReactNode[];
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const value = useMemo(
    () => ({ isLoggedIn, setIsLoggedIn, isLoading }),

    [isLoggedIn, setIsLoggedIn, isLoading]
  );

  useEffect(() => {
    const authToken = localStorage.getItem("auth-token");
    if (authToken) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, [isLoading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthProvider = () => {
  return useContext(AuthContext);
};
