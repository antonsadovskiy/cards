import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { StyledTableCell } from "common/styles";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { packsParamsActions } from "features/packsParams/packsParamsSlice";
import SortingItem from "features/packs/Packs/PacksTable/SortingItem/SortingItem";
import PacksTableRow from "features/packs/Packs/PacksTable/PacksTableRow/PacksTableRow";
import { selectorCardPacks } from "features/packs/packsSelectors";
import { selectorSortPacks } from "features/packsParams/packsParamsSelectors";
import { selectorUserId } from "features/auth/authSelectors";

const PacksTable = () => {
  const dispatch = useAppDispatch();

  const cardPacks = useAppSelector(selectorCardPacks);
  const sortPacks = useAppSelector(selectorSortPacks);
  const user_id = useAppSelector(selectorUserId);

  const onChangeSortHandler = (sortPacks: string) => {
    dispatch(packsParamsActions.setSortPacks({ sortPacks }));
  };

  return (
    <TableContainer component={Paper}>
      <Table size="medium" sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <SortingItem
              width={"30%"}
              sort={sortPacks}
              value={"name"}
              label={"Name"}
              onChange={onChangeSortHandler}
            />
            <SortingItem
              width={"15%"}
              sort={sortPacks}
              value={"cardsCount"}
              label={"Cards"}
              onChange={onChangeSortHandler}
            />
            <SortingItem
              width={"15%"}
              sort={sortPacks}
              value={"updated"}
              label={"Last Updated"}
              onChange={onChangeSortHandler}
            />
            <StyledTableCell width={"15%"}>Created by</StyledTableCell>
            <StyledTableCell width={"12%"}>Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cardPacks.map((cardPack) => (
            <PacksTableRow
              key={cardPack._id}
              deckCover={cardPack.deckCover}
              packId={cardPack._id}
              name={cardPack.name}
              private={cardPack.private}
              cardsCount={cardPack.cardsCount}
              updated={cardPack.updated}
              user_name={cardPack.user_name}
              user_id={user_id}
              packs_user_id={cardPack.user_id}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default PacksTable;
