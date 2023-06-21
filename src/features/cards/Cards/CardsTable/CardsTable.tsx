import React from "react";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import SortingItem from "features/packs/Packs/PacksTable/SortingItem/SortingItem";
import { StyledTableCell } from "common/styles";
import TableBody from "@mui/material/TableBody";
import Table from "@mui/material/Table";
import { useAppDispatch, useAppSelector } from "common/hooks";
import CardsTableRow from "features/cards/Cards/CardsTable/CardsTableRow/CardsTableRow";
import { selectorUserId } from "features/auth/authSelectors";
import {
  selectorCards,
  selectorPackUserId,
} from "features/cards/cardsSelectors";
import { selectorSortCards } from "features/cardsParams/cardsParamsSelectors";
import { cardsParamsActions } from "features/cardsParams/cardsParamsSlice";

const CardsTable = () => {
  const dispatch = useAppDispatch();

  const cards = useAppSelector(selectorCards);
  const sortCards = useAppSelector(selectorSortCards);
  const userId = useAppSelector(selectorUserId);
  const packUserId = useAppSelector(selectorPackUserId);

  const isMyPack = userId === packUserId;

  const onChangeSortHandler = (sortCards: string) => {
    dispatch(cardsParamsActions.setSortCards({ sortCards }));
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table size="medium" sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow>
              <StyledTableCell width={"27%"}>Question</StyledTableCell>
              <StyledTableCell width={"27%"}>Answer</StyledTableCell>
              <SortingItem
                width={"20%"}
                sort={sortCards}
                value={"updated"}
                label={"Last Updated"}
                onChange={onChangeSortHandler}
              />
              <StyledTableCell>Grade</StyledTableCell>
              {isMyPack && <StyledTableCell>Actions</StyledTableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {cards.map((card) => (
              <CardsTableRow
                key={card._id}
                cardId={card._id}
                question={card.question}
                answer={card.answer}
                questionImg={card.questionImg}
                answerImg={card.answerImg}
                updated={card.updated}
                grade={card.grade}
                isMyPack={isMyPack}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CardsTable;
