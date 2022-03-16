import { useAdminOnlyRoute } from "../../hooks/useAdminOnlyRoute";

export const Admin = () => {
  useAdminOnlyRoute();

  return (
    <>
      <h1>admin panel</h1>
    </>
  );
};
