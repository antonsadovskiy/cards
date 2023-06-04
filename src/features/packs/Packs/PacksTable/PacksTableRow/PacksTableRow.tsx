import React, { FC } from "react";
import TableRow from "@mui/material/TableRow";
import style from "features/packs/Packs/PacksTable/PacksTable.module.css";
import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import SchoolIcon from "@mui/icons-material/School";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";

type PropsType = {
  name: string;
  cardsCount: number;
  updated: string;
  user_name: string;
};

const PacksTableRow: FC<PropsType> = (props) => {
  return (
    <TableRow>
      <TableCell className={style.packName}>{props.name}</TableCell>
      <TableCell className={style.numberOfCards}>{props.cardsCount}</TableCell>
      <TableCell>{props.updated}</TableCell>
      <TableCell>
        {props.user_name.slice(0, 15)}
        {props.user_name.length > 15 ? "..." : ""}
      </TableCell>
      <TableCell>
        <IconButton disabled={props.cardsCount === 0}>
          <SchoolIcon sx={{ width: "20px", height: "20px" }} />
        </IconButton>
        <IconButton>
          <BorderColorIcon sx={{ width: "20px", height: "20px" }} />
        </IconButton>
        <IconButton>
          <DeleteIcon sx={{ width: "20px", height: "20px" }} />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default PacksTableRow;
