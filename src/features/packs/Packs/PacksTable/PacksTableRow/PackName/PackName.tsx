import React, { FC } from "react";
import TableCell from "@mui/material/TableCell";
import style from "features/packs/Packs/Table/Table.module.css";
import { cutTheString } from "common/utils";
import { NavLink } from "react-router-dom";

type PropsType = {
  name: string;
  packId: string;
};

const PackName: FC<PropsType> = (props) => {
  return (
    <TableCell className={style.packName}>
      <NavLink to={"/packs/" + props.packId}>
        {cutTheString(props.name, 30)}
      </NavLink>
    </TableCell>
  );
};

export default PackName;
