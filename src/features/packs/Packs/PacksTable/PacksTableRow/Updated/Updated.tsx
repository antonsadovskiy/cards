import React, { FC } from "react";
import { convertDate } from "common/utils";
import TableCell from "@mui/material/TableCell";

type PropsType = {
  updated: string;
};

const Updated: FC<PropsType> = (props) => {
  return <TableCell>{convertDate(props.updated)}</TableCell>;
};

export default Updated;
