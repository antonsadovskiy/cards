import React, { FC } from "react";
import TableCell from "@mui/material/TableCell";
import { cutTheString } from "common/utils";

type PropsType = {
  answer: string;
};

const Answer: FC<PropsType> = (props) => {
  return <TableCell>{cutTheString(props.answer, 30)}</TableCell>;
};

export default Answer;
