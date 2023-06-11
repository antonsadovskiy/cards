import React, { FC } from "react";
import { cutTheString } from "common/utils";
import TableCell from "@mui/material/TableCell";

type PropsType = {
  question: string;
};

const Question: FC<PropsType> = (props) => {
  return <TableCell>{cutTheString(props.question, 22)}</TableCell>;
};

export default Question;
