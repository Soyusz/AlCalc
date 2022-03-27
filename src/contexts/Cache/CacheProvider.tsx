import { FC, memo, useCallback } from "react";
import { CacheContext, CacheContextType } from "./CacheContext";

export const CacheContextProvider: FC = memo(({ children }) => {
  const saveValue = useCallback((key: string, v: any): void => {
    localStorage.setItem(key, JSON.stringify(v));
  }, []);

  const getValue = useCallback((key: string) => {
    let item = localStorage.getItem(key);
    if (!item) return null;
    return JSON.parse(item);
  }, []);

  const value: CacheContextType = {
    saveValue,
    getValue,
  };

  return (
    <CacheContext.Provider value={value}>{children}</CacheContext.Provider>
  );
});
