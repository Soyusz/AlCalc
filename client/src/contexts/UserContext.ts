import { createContext } from "react";

export type UserContextType = {
  isLoading: boolean;
  isLogged: boolean;
  isAdmin: boolean;
  username: string;
  setLoadingFalse: () => void;
};

export const UserContext = createContext<UserContextType | null>(null);
