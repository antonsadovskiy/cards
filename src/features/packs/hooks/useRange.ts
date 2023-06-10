import { useAppDispatch, useAppSelector } from "common/hooks";
import { useEffect, useState } from "react";
import { packsParamsActions } from "features/packsParams/packsParamsSlice";
import { selectorIsResetRange } from "features/packsParams/packsParamsSelectors";
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
      dispatch(packsParamsActions.setIsResetRange({ isResetRange: false }));
    }
  }, [isResetRange]);

  const onChangeRangeHandler = (event: any, value: number[] | number) => {
    setValue(value as number[]);
  };
  const onChangeCommittedHandler = () => {
    dispatch(packsParamsActions.setRangeCardsCount({ value: value }));
  };

  return {
    value,
    maxCardsCount,
    onChangeRangeHandler,
    onChangeCommittedHandler,
  };
};
