import React from "react";
import Range from "features/packs/Packs/SetCardsCount/Range/Range";
import style from "features/packs/Packs/SetCardsCount/SetCardsCount.module.css";
import ClearFilter from "features/packs/Packs/ClearFilter/ClearFilter";

const SetCardsCount = () => {
  return (
    <div className={style.numberOfCards}>
      <div style={{ fontWeight: "600" }}>Number of cards</div>
      <div className={style.wrap}>
        <div className={style.range}>
          <Range />
        </div>
        <div className={style.value}>
          <ClearFilter />
        </div>
      </div>
    </div>
  );
};

export default SetCardsCount;
