import { useEffect } from "react";
import { useQuery } from "react-query";

export const useEntry = () => {
  const { data } = useQuery("entries", () =>
    fetch("https://alcalc.herokuapp.com/entry", {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
    })
  );

  useEffect(() => {
    console.log(data);
  }, [data]);
};
