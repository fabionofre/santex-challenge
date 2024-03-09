import { useEffect, useState } from "react";

const useStateWithStorage = <T extends unknown>(
  key: string,
  defaultValue: unknown
) => {
  const [value, setValue] = useState<T | undefined>(() => {
    const jsonValue = localStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : defaultValue;
  });

  useEffect(() => {
    if (value !== undefined) {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.removeItem(key);
    }
  }, [key, value]);

  const storeValue = (value: T) => {
    setValue(value);
  };

  const resetValue = () => {
    setValue(undefined);
  };

  return { value, storeValue, resetValue };
}

export default useStateWithStorage;
