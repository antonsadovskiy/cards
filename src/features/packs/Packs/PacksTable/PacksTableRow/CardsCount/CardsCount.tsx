import React, { FC } from "react";
import TableCell from "@mui/material/TableCell";
import style from "features/packs/Packs/Table/Table.module.css";

type PropsType = {
  cardsCount: number;
};

const CardsCount: FC<PropsType> = (props) => {
  return (
    <TableCell className={style.numberOfCards}>{props.cardsCount}</TableCell>
  );
};

export default CardsCount;
