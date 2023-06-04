import React, { ChangeEvent, FC, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import style from "features/packs/Packs/Search/Search.module.css";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { useDebounce } from "common/utils";
import { useAppDispatch } from "common/hooks";
import { cardsActions } from "features/cards/cardsSlice";

const Search = () => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState("");
  const debouncedValue = useDebounce<string>(search, 700);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  useEffect(() => {
    dispatch(cardsActions.setSearch({ search: debouncedValue }));
  }, [dispatch, debouncedValue]);

  return (
    <div className={style.search}>
      <div style={{ fontWeight: "600" }}>Search</div>
      <TextField
        value={search}
        onChange={onChangeHandler}
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
