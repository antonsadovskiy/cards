import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { StyledTableCell } from "common/styles";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import { CardPackType } from "features/packs/packsAPI";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { shallowEqual } from "react-redux";
import { paramsActions } from "features/params/paramsSlice";
import SortingItem from "features/packs/Packs/PacksTable/SortingItem/SortingItem";
import PacksTableRow from "features/packs/Packs/PacksTable/PacksTableRow/PacksTableRow";

const PacksTable = () => {
  const dispatch = useAppDispatch();

  const cardPacks = useAppSelector<CardPackType[]>(
    (state) => state.packs.cardPacks,
    shallowEqual
  );
  const sortPacks = useAppSelector<string>((state) => state.params.sortPacks);
  const user_id = useAppSelector<string | null>((state) =>
    state.user.profile ? state.user.profile._id : null
  );

  const onChangeSortHandler = (newSort: string) => {
    dispatch(paramsActions.setSortPacks({ sortPacks: newSort }));
  };

  return (
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
