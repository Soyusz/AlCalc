import { createContext } from "react";
import { User } from "../../types/user";

export type UserContextType = {
  token?: string | null;
  user: User | null;
  isAdmin: boolean;
  setToken: React.Dispatch<string>;
};

export const UserContext = createContext<UserContextType | null>(null);
