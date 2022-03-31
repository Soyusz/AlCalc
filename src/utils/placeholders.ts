import { Post } from "../types/post";

export const getPlacehodlerPost = (): Post => ({
  id: `p${Math.floor(Math.random() * 10000)}`,
  location: "",
  photos: [],
  title: "",
  user_id: "",
  skeleton: true,
});
