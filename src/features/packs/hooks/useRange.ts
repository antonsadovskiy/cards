import { useAppDispatch, useAppSelector } from "common/hooks";
import { useEffect, useState } from "react";
import { paramsActions } from "features/params/paramsSlice";
import { selectorIsResetRange } from "features/params/paramsSelectors";
import {
  selectorMaxCardsCount,
  selectorMinCardsCount,
} from "features/packs/packsSelectors";

export const useRange = () => {
  const dispatch = useAppDispatch();

  const minCardsCount = useAppSelector(selectorMinCardsCount);
  const maxCardsCount = useAppSelector(selectorMaxCardsCount);
  const isResetRange = useAppSelector(selectorIsResetRange);

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
