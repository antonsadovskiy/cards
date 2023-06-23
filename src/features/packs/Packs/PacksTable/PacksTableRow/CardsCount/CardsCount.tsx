import React, { FC } from "react";
import TableCell from "@mui/material/TableCell";

type PropsType = { cardsCount: number };

const CardsCount: FC<PropsType> = (props) => {
  return <TableCell>{props.cardsCount}</TableCell>;
};

export default CardsCount;
