import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import style from "features/packs/Packs/ShowPacksCards/ShowPacksCards.module.css";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { packsActions } from "features/packs/packsSlice";

const ShowPacksCards = () => {
  const dispatch = useAppDispatch();
  const isMyPacks = useAppSelector<boolean>(
    (state) => state.packs.params.isMyCards
  );
  const isLoading = useAppSelector<boolean>((state) => state.app.isLoading);

  const setMyPacks = () => {
    dispatch(packsActions.setIsMyCards({ isMyCards: true }));
  };
  const setAllPacks = () => {
    dispatch(packsActions.setIsMyCards({ isMyCards: false }));
  };

  return (
    <div className={style.showPacksCards}>
      <div style={{ fontWeight: "600" }}>Show packs cards</div>
      <ButtonGroup>
        <Button
          disabled={isLoading}
          variant={isMyPacks ? "contained" : "outlined"}
          sx={{ width: "12ch" }}
          onClick={setMyPacks}
        >
          My
        </Button>
        <Button
          disabled={isLoading}
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
