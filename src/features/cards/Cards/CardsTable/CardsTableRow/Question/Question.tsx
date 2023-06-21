import React, { FC } from "react";
import { cutTheString } from "common/utils";
import TableCell from "@mui/material/TableCell";

type PropsType = {
  question: string;
  questionImg: string;
};

const WRONG_QUESTION = "url or base 64";

const Question: FC<PropsType> = (props) => {
  return (
    <TableCell>
      {props.questionImg === WRONG_QUESTION || !props.questionImg ? (
        cutTheString(props.question, 22)
      ) : (
        <img
          src={props.questionImg}
          width={"100"}
          height={"auto"}
          alt={"question"}
        />
      )}
    </TableCell>
  );
};

export default Question;
