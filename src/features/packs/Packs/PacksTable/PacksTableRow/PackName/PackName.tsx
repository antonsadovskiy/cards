import React, { FC } from "react";
import TableCell from "@mui/material/TableCell";
import style from "features/packs/Packs/Table/Table.module.css";

type PropsType = {
  name: string;
};

const PackName: FC<PropsType> = (props) => {
  return (
    <TableCell className={style.packName}>
      {props.name.slice(0, 30)}
      {props.name.length > 35 ? "..." : ""}
    </TableCell>
  );
};

export default PackName;
