import React from "react";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import IconButton from "@mui/material/IconButton";
import style from "features/packs/Packs/ClearFilter/ClearFilter.module.css";

const ClearFilter = () => {
  return (
    <div className={style.filter}>
      <IconButton>
        <FilterAltOffIcon />
      </IconButton>
    </div>
  );
};

export default ClearFilter;
