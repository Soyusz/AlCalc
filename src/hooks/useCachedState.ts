import { useEffect, useState } from "react";
import { useCacheContext } from "../contexts/Cache/useCache";

export const useCachedState = <T>(key: string, initial: T) => {
  const { getValue, saveValue } = useCacheContext();

  const [state, setState] = useState<T>(getValue(key) ?? initial);

  useEffect(() => {
    saveValue(key, state);
  }, [state, key, saveValue]);

  return [state as T, setState] as const;
};
