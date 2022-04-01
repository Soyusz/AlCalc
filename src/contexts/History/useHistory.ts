import { useContext } from "react";
import { HistoryContext } from "./HistoryContext";

export const useHistory = () => {
  const context = useContext(HistoryContext);

  if (!context) throw Error("Use this hook in provider scope");
  return context;
};
