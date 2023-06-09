import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import style from "features/packs/Packs/ShowPacksCards/ShowPacksCards.module.css";
import { useShowPacksCards } from "features/packs/hooks";
import { useAppSelector } from "common/hooks";
import { selectorIsLoading } from "app/appSelectors";

const ShowPacksCards = () => {
  const isLoading = useAppSelector(selectorIsLoading);
  const { isMyPacks, setAllPacks, setMyPacks } = useShowPacksCards();

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
