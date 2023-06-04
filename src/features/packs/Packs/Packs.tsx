import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import style from "./Packs.module.css";
import Button from "@mui/material/Button";
import Title from "common/components/Title/Title";
import PacksTable from "features/packs/Packs/PacksTable/PacksTable";
import Search from "features/packs/Packs/Search/Search";
import ShowPacksCards from "features/packs/Packs/ShowPacksCards/ShowPacksCards";
import NumberOfCards from "features/packs/Packs/NumberOfCards/NumberOfCards";
import MyPagination from "common/components/Pagination/Pagination";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { cardsThunks } from "features/cards/cardsSlice";

const Packs = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector<boolean>((state) => state.user.isLoggedIn);

  const search = useAppSelector<string>((state) => state.cards.search);
  const isMyCards = useAppSelector<boolean>((state) => state.cards.isMyCards);
  const min = useAppSelector<number>((state) => state.cards.minCardsCount);
  const max = useAppSelector<number>((state) => state.cards.maxCardsCount);
  const page = useAppSelector<number>((state) => state.cards.page);
  const pageCount = useAppSelector<number>((state) => state.cards.pageCount);

  const user_id = useAppSelector<string | null>((state) =>
    state.user.profile ? state.user.profile._id : null
  );

  useEffect(() => {
    dispatch(
      cardsThunks.getCards({
        packName: search,
        user_id: isMyCards ? user_id : null,
        page,
        pageCount,
        max,
        min,
      })
    );
  }, [search, isMyCards, min, max, page, pageCount, user_id]);

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
