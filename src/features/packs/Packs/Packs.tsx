import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import style from "./Packs.module.css";
import Button from "@mui/material/Button";
import Title from "common/components/Title/Title";
import PacksTable from "features/packs/Packs/PacksTable/PacksTable";
import { useAppSelector } from "common/hooks/useAppSelector";
import Search from "features/packs/Packs/Search/Search";
import ShowPacksCards from "features/packs/Packs/ShowPacksCards/ShowPacksCards";
import NumberOfCards from "features/packs/Packs/NumberOfCards/NumberOfCards";
import MyPagination from "common/components/Pagination/Pagination";
import { useAppDispatch } from "common/hooks";
import { cardsThunks } from "features/cards/cardsSlice";

const Packs = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector<boolean>((state) => state.user.isLoggedIn);

  useEffect(() => {
    const payload = {
      packName: "eng",
      min: 1,
      max: 10,
      page: 1,
      pageCount: 10,
    };
    dispatch(cardsThunks.getCards(payload));
  }, []);

  if (!isLoggedIn) return <Navigate to={"/login"} />;

  return (
    <div className={style.packs}>
      <div className={style.title}>
        <Title title={"Packs list"} />
        <Button variant={"contained"}>add new pack</Button>
      </div>
      <div className={style.table}>
        <div className={style.filters}>
          <Search />
          <ShowPacksCards />
          <NumberOfCards />
        </div>
        <PacksTable />
        <MyPagination />
      </div>
    </div>
  );
};

export default Packs;
