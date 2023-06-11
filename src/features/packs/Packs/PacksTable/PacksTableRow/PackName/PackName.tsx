import React, { FC } from "react";
import TableCell from "@mui/material/TableCell";
import { cutTheString } from "common/utils";
import style from "common/components/Table/Table.module.css";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "common/hooks";
import { selectorIsLoading } from "app/appSelectors";

type PropsType = {
  name: string;
  packId: string;
};

const PackName: FC<PropsType> = (props) => {
  const isLoading = useAppSelector(selectorIsLoading);
  return (
    <TableCell className={isLoading ? style.disable : style.packName}>
      <NavLink to={"/packs/" + props.packId}>
        {cutTheString(props.name, 35)}
      </NavLink>
    </TableCell>
  );
};

export default PackName;
