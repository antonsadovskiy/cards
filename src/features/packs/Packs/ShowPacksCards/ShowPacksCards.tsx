import React, { useState } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import style from "features/packs/Packs/ShowPacksCards/ShowPacksCards.module.css";

const ShowPacksCards = () => {
  const [isMyPacks, setIsMyPacks] = useState<boolean>(false);

  const setMyPacks = () => setIsMyPacks(true);
  const setAllPacks = () => setIsMyPacks(false);

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
