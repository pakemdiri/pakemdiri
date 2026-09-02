import { useMemo, useSyncExternalStore } from "react";

const noop = () => () => {};

/**
 * Read a JSON value from sessionStorage without hydration mismatch.
 * During SSR/hydration the server snapshot (null) is used, then React
 * re-renders with the real client value after hydration completes.
 */
export function useSessionStorageJSON(key) {
  const raw = useSyncExternalStore(
    noop,
    () => sessionStorage.getItem(key),
    () => null
  );
  return useMemo(() => {
    if (raw === null) return [];
    try {
      return JSON.parse(raw);
    } catch {
      return [];
    }
  }, [raw]);
}
