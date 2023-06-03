import React from "react";
import TextField from "@mui/material/TextField";
import style from "features/packs/Packs/Search/Search.module.css";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <div className={style.search}>
      <div style={{ fontWeight: "600" }}>Search</div>
      <TextField
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
