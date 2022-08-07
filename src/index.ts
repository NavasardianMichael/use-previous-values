import { useEffect, useMemo, useRef } from "react";

function usePreviousValues<T>(value: T, maxSteps: number = 30): [T[], () => void] {
  const isReseted = useRef<boolean>(false);
  const dataRef = useRef<T[]>([]);
  const _maxSteps = useMemo<number>(() => Math.min(maxSteps, 50), [maxSteps]);

  useEffect(() => {
    if (isReseted.current) {
      dataRef.current = [];
      isReseted.current = false;
      return;
    }

    if (dataRef.current.length + 1 > _maxSteps) {
      dataRef.current.shift();
    }

    dataRef.current[dataRef.current.length] = value;
  }, [_maxSteps, value]);

  const reset = () => isReseted.current = true

  return [dataRef.current, reset];
}

export { usePreviousValues }