import { useEffect } from "react";
import { useQuery } from "react-query";

export const useEntry = () => {
  const { data } = useQuery<unknown, unknown, any[]>("entries", () =>
    fetch("https://alcalc.herokuapp.com/entry", {
      method: "GET",
    }).then((res) => res.json())
  );

  useEffect(() => {
    console.log(data);
  }, [data]);

  return {
    data,
  };
};
