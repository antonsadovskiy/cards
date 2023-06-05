import React, { ChangeEvent, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import style from "features/packs/Packs/Search/Search.module.css";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { useDebounce } from "common/utils";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { packsActions } from "features/packs/packsSlice";

const Search = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector<boolean>((state) => state.app.isLoading);
  const packName = useAppSelector<string>(
    (state) => state.packs.params.packName
  );

  const [search, setSearch] = useState("");
  const debouncedValue = useDebounce<string>(search, 700);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  useEffect(() => {
    setSearch(packName);
  }, [packName]);

  useEffect(() => {
    dispatch(packsActions.setSearch({ search: debouncedValue }));
  }, [dispatch, debouncedValue]);

  return (
    <div className={style.search}>
      <div style={{ fontWeight: "600" }}>Search</div>
      <TextField
        value={search}
        onChange={onChangeHandler}
        disabled={isLoading}
        size={"small"}
        placeholder={"Provide your text"}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default Search;
