import { useUserContext } from "../../contexts/useUserContext";
import { useAdminOnlyRoute } from "../../hooks/useAdminOnlyRoute";
import { useNavigation } from "../../hooks/useNavigation";

export const Admin = () => {
  useAdminOnlyRoute();

  return (
    <>
      <h1>admin panel</h1>
    </>
  );
};
