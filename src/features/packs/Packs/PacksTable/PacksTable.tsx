import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useAppSelector } from "common/hooks";
import { CardsPackType } from "features/cards/cardsAPI";
import PacksTableRow from "features/packs/Packs/PacksTable/PacksTableRow/PacksTableRow";
import { StyledTableCell } from "common/styles/StyleTableCell";

const PacksTable = () => {
  const cardPacks = useAppSelector<CardsPackType[]>(
    (state) => state.cards.cardPacks
  );

  return cardPacks.length > 0 ? (
    <TableContainer component={Paper}>
      <Table size="medium" sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Cards</StyledTableCell>
            <StyledTableCell>Last Updated</StyledTableCell>
            <StyledTableCell>Created by</StyledTableCell>
            <StyledTableCell>Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cardPacks.map((cardPack, index) => (
            <PacksTableRow
              name={cardPack.name}
              cardsCount={cardPack.cardsCount}
              updated={cardPack.updated}
              user_name={cardPack.user_name}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : (
    <div>No decks with name entered were found. Change query settings</div>
  );
};
export default PacksTable;
