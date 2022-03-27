import { useEffect } from "react";
import { useUserContext } from "../contexts/User/useUserContext";
import { useNavigation } from "./useNavigation";

export const useAdminOnlyRoute = () => {
  const { navigate } = useNavigation();
  const { isAdmin } = useUserContext();

  useEffect(() => {
    if (!isAdmin) navigate("/");
  }, [navigate, isAdmin]);
};
