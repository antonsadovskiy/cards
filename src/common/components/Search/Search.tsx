import React, { FC } from "react";
import TextField from "@mui/material/TextField";
import style from "common/components/Search/Search.module.css";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { useSearch } from "features/packs/hooks";
import { useAppSelector } from "common/hooks";
import { selectorIsLoading } from "app/appSelectors";

type PropsType = {
  value: string;
  onDebouncedHandler: (value: string) => void;
  fullWidth?: boolean;
};

const Search: FC<PropsType> = (props) => {
  const isLoading = useAppSelector(selectorIsLoading);
  const { search, onChangeHandler } = useSearch(
    props.onDebouncedHandler,
    props.value
  );

  return (
    <div
      className={style.search}
      style={{ width: props.fullWidth ? "100%" : "25rem" }}
    >
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
