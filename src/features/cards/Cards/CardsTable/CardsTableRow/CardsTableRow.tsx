import React, { FC } from "react";
import Updated from "features/packs/Packs/PacksTable/PacksTableRow/Updated/Updated";
import TableRow from "@mui/material/TableRow";
import Question from "features/cards/Cards/CardsTable/CardsTableRow/Question/Question";
import Answer from "features/cards/Cards/CardsTable/CardsTableRow/Answer/Answer";
import Grade from "features/cards/Cards/CardsTable/CardsTableRow/Grade/Grade";
import Edit from "features/cards/Cards/CardsTable/CardsTableRow/Edit/Edit";

type PropsType = {
  cardId: string;
  question: string;
  answer: string;
  questionImg: string;
  answerImg: string;
  updated: string;
  grade: number;
  isMyPack: boolean;
};

const CardsTableRow: FC<PropsType> = (props) => {
  return (
    <TableRow>
      <Question question={props.question} questionImg={props.questionImg} />
      <Answer answer={props.answer} />
      <Updated updated={props.updated} />
      <Grade grade={props.grade} />
      {props.isMyPack && (
        <Edit
          cardId={props.cardId}
          question={props.question}
          answer={props.answer}
          questionImg={props.questionImg}
        />
      )}
    </TableRow>
  );
};

export default CardsTableRow;
