import React, { FC } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import style from "features/packs/Packs/ShowPacksCards/ShowPacksCards.module.css";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { cardsActions } from "features/cards/cardsSlice";

const ShowPacksCards = () => {
  const dispatch = useAppDispatch();
  const isMyPacks = useAppSelector<boolean>((state) => state.cards.isMyCards);

  const setMyPacks = () => {
    dispatch(cardsActions.setIsMyCards({ isMyCards: true }));
  };
  const setAllPacks = () => {
    dispatch(cardsActions.setIsMyCards({ isMyCards: false }));
  };

  return (
    <div className={style.showPacksCards}>
      <div style={{ fontWeight: "600" }}>Show packs cards</div>
      <ButtonGroup>
        <Button
          variant={isMyPacks ? "contained" : "outlined"}
          sx={{ width: "12ch" }}
          onClick={setMyPacks}
        >
          My
        </Button>
        <Button
          variant={!isMyPacks ? "contained" : "outlined"}
          sx={{ width: "12ch" }}
          onClick={setAllPacks}
        >
          All
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ShowPacksCards;
