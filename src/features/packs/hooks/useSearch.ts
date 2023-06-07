import { useAppDispatch, useAppSelector } from "common/hooks";
import { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "common/utils";
import { paramsActions } from "features/params/paramsSlice";

export const useSearch = () => {
  const dispatch = useAppDispatch();
  const packName = useAppSelector<string>((state) => state.params.packName);

  const [search, setSearch] = useState("");
  const debouncedValue = useDebounce<string>(search, 700);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  useEffect(() => {
    setSearch(packName);
  }, [packName]);

  useEffect(() => {
    dispatch(paramsActions.setPackName({ packName: debouncedValue }));
  }, [dispatch, debouncedValue]);

  return { search, onChangeHandler };
};
