import { useQuery } from "react-query";
import { BACKEND_URL } from "../backend_url";
import { User } from "../types/user";

export const useMe = (token?: string | null) => {
  return useQuery<User>(
    "me",
    () =>
      fetch(`${BACKEND_URL}/user/me`, {
        method: "GET",
        headers: {
          Authorization: token as string,
        },
      }).then((res) => res.json()),
    {
      enabled: !!token,
    }
  );
};
