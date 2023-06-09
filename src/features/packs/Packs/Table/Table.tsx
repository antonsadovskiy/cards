import React from "react";
import { useAppSelector } from "common/hooks";
import PacksNotFound from "common/components/PacksNotFount/PacksNotFound";
import PacksTable from "features/packs/Packs/PacksTable/PacksTable";
import { selectorIsLoading } from "app/appSelectors";
import { selectorCardPacks } from "features/packs/packsSelectors";

const Table = () => {
  const cardPacks = useAppSelector(selectorCardPacks);
  const isLoading = useAppSelector(selectorIsLoading);

  return cardPacks.length > 0 ? (
    <PacksTable />
  ) : isLoading ? (
    <></>
  ) : (
    <PacksNotFound />
  );
};
export default Table;
