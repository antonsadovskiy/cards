import React, { useState } from "react";
import Range from "common/components/Range/Range";
import style from "features/packs/Packs/NumberOfCards/NumberOfCards.module.css";
import ClearFilter from "features/packs/Packs/ClearFilter/ClearFilter";

const NumberOfCards = () => {
  const [value, setValue] = useState<number[]>([0, 100]);

  const onChangeRangeHandler = (value: number[]) => setValue(value);

  return (
    <div className={style.numberOfCards}>
      <div style={{ fontWeight: "600" }}>Number of cards</div>
      <div className={style.wrap}>
        <div className={style.range}>
          <div className={style.value}>{value[0]}</div>
          <Range value={value} onChangeRangeHandler={onChangeRangeHandler} />
          <div className={style.value}>{value[1]}</div>
        </div>
        <div className={style.value}>
          <ClearFilter />
        </div>
      </div>
    </div>
  );
};

export default NumberOfCards;
