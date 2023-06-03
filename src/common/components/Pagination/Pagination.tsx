import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Pagination from "@mui/material/Pagination";
import Select from "@mui/material/Select";
import React from "react";
import style from "./Pagination.module.css";

const MyPagination = () => {
  return (
    <div className={style.pagination}>
      <Pagination color="primary" count={10} shape="rounded" />
      <span>Show</span>
      <FormControl sx={{ m: 1, minWidth: 50 }} size="small">
        <Select value={10} onChange={() => {}}>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
      </FormControl>
      <span>Cards per Page</span>
    </div>
  );
};

export default MyPagination;
