import React from "react";
import TextField from "@mui/material/TextField";
import style from "features/packs/Packs/Search/Search.module.css";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { useSearch } from "features/packs/hooks";
import { useLoading } from "common/hooks";

const Search = () => {
  const isLoading = useLoading();
  const { search, onChangeHandler } = useSearch();

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
