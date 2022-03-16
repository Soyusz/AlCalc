import { useQuery } from "react-query";
import { BACKEND_URL } from "../backend_url";
import { user } from "../types/user";

export const useUser = (user_id: string) => {
  return useQuery<user>(["user", user_id], () =>
    fetch(`${BACKEND_URL}/user/${user_id}`).then((res) => res.json())
  );
};
