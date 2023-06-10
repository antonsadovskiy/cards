import { useAppDispatch, useAppSelector } from "common/hooks";
import { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "common/utils";
import { selectorPackName } from "features/packsParams/packsParamsSelectors";

export const useSearch = (onDebouncedHandler: (packName: string) => void) => {
  const dispatch = useAppDispatch();
  const packName = useAppSelector(selectorPackName);

  const [search, setSearch] = useState("");
  const debouncedValue = useDebounce<string>(search, 700);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  useEffect(() => {
    setSearch(packName);
  }, [packName]);

  useEffect(() => {
    onDebouncedHandler(debouncedValue);
  }, [dispatch, debouncedValue]);

  return { search, onChangeHandler };
};
