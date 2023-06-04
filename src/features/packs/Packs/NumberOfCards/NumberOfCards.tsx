import React, { useState } from "react";
import Range from "common/components/Range/Range";
import style from "features/packs/Packs/NumberOfCards/NumberOfCards.module.css";
import ClearFilter from "features/packs/Packs/ClearFilter/ClearFilter";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { cardsActions } from "features/cards/cardsSlice";

const NumberOfCards = () => {
  const dispatch = useAppDispatch();
  const min = useAppSelector<number>((state) => state.cards.minCardsCount);
  const max = useAppSelector<number>((state) => state.cards.maxCardsCount);
  const [value, setValue] = useState<number[]>([min, max]);

  const onChangeCommittedHandler = () => {
    dispatch(cardsActions.setCardsCount({ value: value }));
  };

  const onChangeRangeHandler = (value: number[]) => setValue(value);

  return (
    <div className={style.numberOfCards}>
      <div style={{ fontWeight: "600" }}>Number of cards</div>
      <div className={style.wrap}>
        <div className={style.range}>
          <div className={style.value}>{value[0]}</div>
          <Range
            value={value}
            onChangeRangeHandler={onChangeRangeHandler}
            onChangeCommittedHandler={onChangeCommittedHandler}
          />
          <div className={style.value}>{value[1]}</div>
        </div>
        <div className={style.value}>
          <ClearFilter onClickClearFilterHandler={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default NumberOfCards;
