import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

export const useNavigation = () => {
  const nav = useNavigate();

  const navigate = nav;

  return useMemo(
    () => ({
      history,
      navigate,
    }),
    [history, navigate]
  );
};
