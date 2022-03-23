import { useAdminOnlyRoute } from "../../hooks/useAdminOnlyRoute";
import { Judge } from "./Judge";

export const Admin = () => {
  useAdminOnlyRoute();

  return (
    <>
      <Judge />
    </>
  );
};
