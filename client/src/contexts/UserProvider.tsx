import { FC, memo, useState } from "react";
import { UserContext, UserContextType } from "./UserContext";

export const UserContextProvider: FC = memo(({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [username, setUsername] = useState("");

  const setLoadingFalse = () => setIsLoading(false);

  const value: UserContextType = {
    isLoading,
    isLogged,
    isAdmin,
    username,
    setLoadingFalse,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
});
