import { useAppDispatch } from "common/hooks";
import { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "common/utils";

export const useSearch = (
  onDebouncedHandler: (value: string) => void,
  value: string
) => {
  const dispatch = useAppDispatch();

  const [search, setSearch] = useState(value);
  const debouncedValue = useDebounce<string>(search, 700);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  useEffect(() => {
    setSearch(value);
  }, [value]);

  useEffect(() => {
    onDebouncedHandler(debouncedValue);
  }, [dispatch, debouncedValue]);

  return { search, onChangeHandler };
};
