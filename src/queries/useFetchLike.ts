import { useQuery } from "react-query";
import { BACKEND_URL } from "../backend_url";
import { useUserContext } from "../contexts/User/useUserContext";
import { User } from "../types/user";

export const useFetchLike = (post_id?: string | null | false) => {
  const { user: me } = useUserContext();
  const query = useQuery<User[]>(
    ["post likes", post_id],
    () =>
      fetch(`${BACKEND_URL}/like/${post_id}`, {
        method: "GET",
      }).then(res => res.json()),
    {
      enabled: !!post_id,
    }
  );
  const amILiking = query.data ? query.data.some(u => u.id === me?.id) : null;
  const likesNumber = query.data?.length;
  return {
    ...query,
    amILiking,
    likesNumber,
  };
};
