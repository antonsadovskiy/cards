import React from "react";
import { useAppSelector } from "common/hooks";
import { CardPackType } from "features/packs/packsAPI";
import PacksNotFound from "common/components/PacksNotFount/PacksNotFound";
import MainTable from "features/packs/Packs/MainTable/MainTable";

const PacksTable = () => {
  const cardPacks = useAppSelector<CardPackType[]>(
    (state) => state.packs.cardPacks
  );

  const isLoading = useAppSelector<boolean>((state) => state.app.isLoading);

  return cardPacks.length > 0 ? (
    <MainTable />
  ) : isLoading ? (
    <></>
  ) : (
    <PacksNotFound />
  );
};
export default PacksTable;
