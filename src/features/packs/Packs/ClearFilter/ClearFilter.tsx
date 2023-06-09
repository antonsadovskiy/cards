import React from "react";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import IconButton from "@mui/material/IconButton";
import style from "features/packs/Packs/ClearFilter/ClearFilter.module.css";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { paramsActions } from "features/params/paramsSlice";
import { selectorIsLoading } from "app/appSelectors";

const ClearFilter = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectorIsLoading);

  const onClearFilterHandler = () => {
    dispatch(paramsActions.clearFilters());
  };

  return (
    <div className={style.filter}>
      <IconButton onClick={onClearFilterHandler} disabled={isLoading}>
        <FilterAltOffIcon />
      </IconButton>
    </div>
  );
};

export default ClearFilter;
