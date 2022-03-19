import { useQuery } from "react-query";
import { BACKEND_URL } from "../backend_url";
import { Post } from "../types/post";

export const useUserPosts = (userId?: string) => {
  return useQuery<Post[]>(
    ["user post", userId],
    () =>
      fetch(`${BACKEND_URL}/post/user/${userId}`, {
        method: "GET",
      }).then((res) => res.json()),
    {
      enabled: !!userId,
    }
  );
};
