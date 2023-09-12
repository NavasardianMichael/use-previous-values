import { useEffect, useMemo, useRef } from "react";

function usePreviousValues<T>(value: T, cacheMaxSteps: number = 10): [T[], () => void] {
  const isResetRef = useRef<boolean>(false);
  const dataRef = useRef<T[]>([]);
  const _maxSteps = useMemo<number>(() => Math.min(cacheMaxSteps, 50), [cacheMaxSteps]);

  useEffect(() => {
    if (isResetRef.current) {
      dataRef.current = [];
      isResetRef.current = false;
      return;
    }

    if (dataRef.current.length + 1 > _maxSteps) {
      dataRef.current.shift();
    }

    dataRef.current[dataRef.current.length] = value;
  }, [_maxSteps, value]);

  const reset = () => isResetRef.current = true

  return [dataRef.current, reset];
}

export { usePreviousValues }