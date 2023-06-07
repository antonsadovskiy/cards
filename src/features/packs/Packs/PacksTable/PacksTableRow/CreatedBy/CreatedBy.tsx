import React, { FC } from "react";
import TableCell from "@mui/material/TableCell";

type PropsType = {
  user_name: string;
};

const CreatedBy: FC<PropsType> = (props) => {
  return (
    <TableCell>
      {props.user_name.slice(0, 20)}
      {props.user_name.length > 20 ? "..." : ""}
    </TableCell>
  );
};

export default CreatedBy;