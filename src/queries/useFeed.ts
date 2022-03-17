import { useQuery } from "react-query";
import { BACKEND_URL } from "../backend_url";
import { useUserContext } from "../contexts/useUserContext";
import { Post } from "../types/post";

export const useFeed = () => {
  const { token } = useUserContext();
  return useQuery<Post[]>(
    "feed",
    () =>
      fetch(`${BACKEND_URL}/post/feed`, {
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
