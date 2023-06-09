import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import React from "react";
import style from "features/packs/Packs/SetCardsCount/SetCardsCount.module.css";
import { useAppSelector } from "common/hooks";
import { useRange } from "features/packs/hooks";
import { selectorIsLoading } from "app/appSelectors";

const Range = () => {
  const isLoading = useAppSelector(selectorIsLoading);
  const {
    value,
    maxCardsCount,
    onChangeRangeHandler,
    onChangeCommittedHandler,
  } = useRange();

  return (
    <>
      <div className={style.value}>{value[0]}</div>
      <Box sx={{ width: 155 }}>
        <Slider
          max={maxCardsCount}
          value={value}
          disabled={isLoading}
          onChange={onChangeRangeHandler}
          onChangeCommitted={onChangeCommittedHandler}
        />
      </Box>
      <div className={style.value}>{value[1]}</div>
    </>
  );
};

export default Range;
