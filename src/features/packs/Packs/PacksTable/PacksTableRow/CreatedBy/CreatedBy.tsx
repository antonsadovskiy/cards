import React, { FC } from "react";
import TableCell from "@mui/material/TableCell";
import { cutTheString } from "common/utils";

type PropsType = { user_name: string };

const CreatedBy: FC<PropsType> = (props) => {
  return <TableCell>{cutTheString(props.user_name, 20)}</TableCell>;
};

export default CreatedBy;
