import React, { FC } from "react";
import TableCell from "@mui/material/TableCell";
import Rating from "@mui/material/Rating";

type PropsType = {
  grade: number;
};

const Grade: FC<PropsType> = (props) => {
  return (
    <TableCell>
      <Rating value={Math.round(props.grade)} readOnly />
    </TableCell>
  );
};

export default Grade;
