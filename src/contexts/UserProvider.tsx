import { FC, memo, useEffect, useState } from "react";
import { UserContext, UserContextType } from "./UserContext";
import { useMe } from "../queries/useMe";
import { useNavigation } from "../hooks/useNavigation";

export const UserContextProvider: FC = memo(({ children }) => {
  const [token, setToken] = useState<string | null | undefined>();
  const { data: user } = useMe(token);
  const navigation = useNavigation();

  useEffect(() => {
    if (token === null) navigation.navigate("/login");
  }, [token]);

  useEffect(() => {
    if (token === undefined) return;
    if (token === null) return localStorage.removeItem("token");
    localStorage.setItem("token", token);
  }, [token]);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const value: UserContextType = {
    user: user ?? null,
    token,
    isAdmin: user?.role === "Admin",
    setToken,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
});
