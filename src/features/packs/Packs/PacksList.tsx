import React from "react";
import { Navigate } from "react-router-dom";
import style from "features/packs/Packs/PacksList.module.css";
import Title from "common/components/Title/Title";
import Search from "common/components/Search/Search";
import ShowPacksCards from "features/packs/Packs/ShowPacksCards/ShowPacksCards";
import SetCardsCount from "features/packs/Packs/SetCardsCount/SetCardsCount";
import MyPagination from "common/components/Pagination/Pagination";
import { usePacks } from "features/packs/hooks";
import { BasicModal } from "common/components/Modal/Modal";
import AddPackModal from "features/packs/Packs/Modals/AddPackModal/AddPackModal";
import Table from "common/components/Table/Table";
import PacksTable from "features/packs/Packs/PacksTable/PacksTable";

const PacksList = () => {
  const {
    cardPacks,
    isLoggedIn,
    page,
    pageCount,
    packsTotalCount,
    addPackHandler,
    onDebouncedHandler,
    changePageHandler,
    changePageCountHandler,
  } = usePacks();

  if (!isLoggedIn) return <Navigate to={"/login"} />;

  return (
    <div className={style.packs}>
      <div className={style.title}>
        <Title title={"Packs list"} />
        <BasicModal type={"addModal"}>
          <AddPackModal addPackHandler={addPackHandler} />
        </BasicModal>
      </div>
      <div className={style.table}>
        <div className={style.filters}>
          <Search onDebouncedHandler={onDebouncedHandler} />
          <ShowPacksCards />
          <SetCardsCount />
        </div>
        <Table ifNotFound={"card packs"} entity={cardPacks}>
          <PacksTable />
        </Table>
        <MyPagination
          page={page}
          pageCount={pageCount}
          totalCount={packsTotalCount}
          changePageHandler={changePageHandler}
          changePageCountHandler={changePageCountHandler}
        />
      </div>
    </div>
  );
};
export default PacksList;
