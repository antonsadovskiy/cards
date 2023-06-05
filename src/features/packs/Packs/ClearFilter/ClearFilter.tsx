import React from "react";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import IconButton from "@mui/material/IconButton";
import style from "features/packs/Packs/ClearFilter/ClearFilter.module.css";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { packsActions } from "features/packs/packsSlice";

const ClearFilter = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector<boolean>((state) => state.app.isLoading);

  const onClearFilterHandler = () => dispatch(packsActions.clearFilters());

  return (
    <div className={style.filter}>
      <IconButton onClick={onClearFilterHandler} disabled={isLoading}>
        <FilterAltOffIcon />
      </IconButton>
    </div>
  );
};

export default ClearFilter;
