import { useAppDispatch, useAppSelector } from "common/hooks";
import { useEffect, useState } from "react";
import { paramsActions } from "features/params/paramsSlice";

export const useRange = () => {
  const dispatch = useAppDispatch();

  const minCardsCount = useAppSelector<number>(
    (state) => state.packs.minCardsCount
  );
  const maxCardsCount = useAppSelector<number>(
    (state) => state.packs.maxCardsCount
  );
  const isResetRange = useAppSelector<boolean>(
    (state) => state.params.isResetRange
  );

  const [value, setValue] = useState<number[]>([minCardsCount, maxCardsCount]);

  useEffect(() => {
    setValue([minCardsCount, maxCardsCount]);
  }, [minCardsCount, maxCardsCount]);

  useEffect(() => {
    if (isResetRange) {
      setValue([minCardsCount, maxCardsCount]);
      dispatch(paramsActions.setIsResetRange({ isResetRange: false }));
    }
  }, [isResetRange]);

  const onChangeRangeHandler = (event: any, value: number[] | number) => {
    setValue(value as number[]);
  };
  const onChangeCommittedHandler = () => {
    dispatch(paramsActions.setRangeCardsCount({ value: value }));
  };

  return {
    value,
    maxCardsCount,
    onChangeRangeHandler,
    onChangeCommittedHandler,
  };
};
