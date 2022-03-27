import { createContext } from "react";

export type CacheContextType = {
  saveValue: <T>(k: string, v: T) => void;
  getValue: <T>(k: string) => T;
};

export const CacheContext = createContext<CacheContextType | null>(null);
