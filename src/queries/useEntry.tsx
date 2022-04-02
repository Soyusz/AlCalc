import { useQuery } from "react-query";
import { BACKEND_URL } from "../backend_url";

export const useEntry = () => {
  const { data } = useQuery<unknown, unknown, any[]>("entries", () =>
    fetch(`${BACKEND_URL}/entry/verified`, {
      method: "GET",
    }).then((res) => res.json())
  );

  return {
    data,
  };
};
