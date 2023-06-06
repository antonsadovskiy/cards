import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { CardPackType } from "features/packs/packsAPI";
import PacksTableRow from "features/packs/Packs/PacksTable/PacksTableRow/PacksTableRow";
import { StyledTableCell } from "common/styles/StyleTableCell";
import PacksNotFound from "common/components/PacksNotFount/PacksNotFound";
import { paramsActions } from "features/params/paramsSlice";
import SortingItem from "features/packs/Packs/SortingItem/SortingItem";

const PacksTable = () => {
  const dispatch = useAppDispatch();

  const cardPacks = useAppSelector<CardPackType[]>(
    (state) => state.packs.cardPacks
  );
  const sortPacks = useAppSelector<string>((state) => state.params.sortPacks);
  const isLoading = useAppSelector<boolean>((state) => state.app.isLoading);
  const user_id = useAppSelector<string | null>((state) =>
    state.user.profile ? state.user.profile._id : null
  );

  const onChangeSortHandler = (newSort: string) => {
    dispatch(paramsActions.setSortPacks({ sortPacks: newSort }));
  };

  return cardPacks.length > 0 ? (
    <TableContainer component={Paper}>
      <Table size="medium" sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <SortingItem
              width={"25%"}
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
              width={"25%"}
              sort={sortPacks}
              value={"updated"}
              label={"Last Updated"}
              onChange={onChangeSortHandler}
            />
            <StyledTableCell width={"20%"}>Created by</StyledTableCell>
            <StyledTableCell width={"15%"}>Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cardPacks.map((cardPack) => (
            <PacksTableRow
              key={cardPack._id}
              packId={cardPack._id}
              name={cardPack.name}
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
  ) : isLoading ? (
    <></>
  ) : (
    <PacksNotFound />
  );
};
export default PacksTable;
