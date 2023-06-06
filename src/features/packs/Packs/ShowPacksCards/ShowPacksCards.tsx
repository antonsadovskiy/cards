import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import style from "features/packs/Packs/ShowPacksCards/ShowPacksCards.module.css";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { paramsActions } from "features/params/paramsSlice";

const ShowPacksCards = () => {
  const dispatch = useAppDispatch();
  const isMyPacks = useAppSelector<boolean>((state) => state.params.isMyCards);
  const isLoading = useAppSelector<boolean>((state) => state.app.isLoading);

  const setMyPacks = () => {
    dispatch(paramsActions.setIsMyCards({ isMyCards: true }));
  };
  const setAllPacks = () => {
    dispatch(paramsActions.setIsMyCards({ isMyCards: false }));
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
