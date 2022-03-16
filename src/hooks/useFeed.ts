import { useQuery } from "react-query";
import { Entry } from "../types/entry";

const BACKEND_URL = "http://localhost:5000";

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
