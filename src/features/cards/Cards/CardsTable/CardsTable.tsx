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
import { CardType } from "features/cards/cardsAPI";
import CardsTableRow from "features/cards/Cards/CardsTable/CardsTableRow/CardsTableRow";
import { packsParamsActions } from "features/packsParams/packsParamsSlice";
import { selectorSortPacks } from "features/packsParams/packsParamsSelectors";
import { selectorUserId } from "features/auth/authSelectors";

const CardsTable = () => {
  const dispatch = useAppDispatch();

  const cards = useAppSelector<CardType[]>((state) => state.cards.cards);
  const sortPacks = useAppSelector(selectorSortPacks);
  const userId = useAppSelector(selectorUserId);
  const packUserId = useAppSelector((state) => state.cards.packUserId);

  const isMyPack = userId === packUserId;

  const onChangeSortHandler = (sortPacks: string) => {
    dispatch(packsParamsActions.setSortPacks({ sortPacks }));
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table size="medium" sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow>
              <StyledTableCell width={"25%"}>Question</StyledTableCell>
              <StyledTableCell width={"25%"}>Answer</StyledTableCell>
              <SortingItem
                width={"20%"}
                sort={sortPacks}
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
