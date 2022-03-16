import { useQuery } from "react-query";
import { BACKEND_URL } from "../backend_url";
import { Entry } from "../types/entry";

export const useFeed = () => {
  return useQuery<Entry[]>("feed", () =>
    fetch(`${BACKEND_URL}/entry`)
      .then((res) => res.json())
      .then((res) => {
        console.log({ res });
        return [...res, ...res, ...res, ...res, ...res];
      })
      .then((res) => [...res, ...res, ...res, ...res])
  );
};
