import { useMutation } from "react-query";
import { BACKEND_URL } from "../backend_url";
import { useUserContext } from "../contexts/useUserContext";
import { NewEntry } from "../types/entry";

export const usePostEntry = () => {
  const { token } = useUserContext();
  return useMutation<unknown, unknown, NewEntry>((entry) =>
    fetch(`${BACKEND_URL}/entry`, {
      method: "POST",
      headers: {
        Authorization: token as string,
      },
      body: JSON.stringify(entry),
    }).then((res) => {
      if (!res.ok) throw new Error();
      return res.json();
    })
  );
};
