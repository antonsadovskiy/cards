import React from "react";
import { useAppSelector } from "common/hooks";
import { CardPackType } from "features/packs/packsAPI";
import PacksNotFound from "common/components/PacksNotFount/PacksNotFound";
import PacksTable from "features/packs/Packs/PacksTable/PacksTable";

const Table = () => {
  const cardPacks = useAppSelector<CardPackType[]>(
    (state) => state.packs.cardPacks
  );

  const isLoading = useAppSelector<boolean>((state) => state.app.isLoading);

  return cardPacks.length > 0 ? (
    <PacksTable />
  ) : isLoading ? (
    <></>
  ) : (
    <PacksNotFound />
  );
};
export default Table;
