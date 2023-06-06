import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import React, { useEffect, useState } from "react";
import style from "features/packs/Packs/NumberOfCards/NumberOfCards.module.css";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { paramsActions } from "features/params/paramsSlice";

const Range = () => {
  const dispatch = useAppDispatch();

  const minCardsCount = useAppSelector<number>(
    (state) => state.packs.minCardsCount
  );
  const maxCardsCount = useAppSelector<number>(
    (state) => state.packs.maxCardsCount
  );

  const isLoading = useAppSelector<boolean>((state) => state.app.isLoading);

  const [value, setValue] = useState<number[]>([minCardsCount, maxCardsCount]);

  useEffect(() => {
    setValue([minCardsCount, maxCardsCount]);
  }, [minCardsCount, maxCardsCount]);

  const onChangeRangeHandler = (event: any, value: number[] | number) => {
    setValue(value as number[]);
  };
  const onChangeCommittedHandler = () => {
    dispatch(paramsActions.setRangeCardsCount({ value: value }));
  };

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
