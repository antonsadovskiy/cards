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
import { packsThunks } from "features/packs/packsSlice";

const Packs = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector<boolean>((state) => state.user.isLoggedIn);
  const isLoading = useAppSelector<boolean>((state) => state.app.isLoading);

  // const packName = useAppSelector<string>(
  //   (state) => state.packs.params.packName
  // );
  // const isMyCards = useAppSelector<boolean>(
  //   (state) => state.packs.params.isMyCards
  // );
  // const min = useAppSelector<number>((state) => state.packs.params.minRange);
  // const max = useAppSelector<number>((state) => state.packs.params.maxRange);
  //
  // const page = useAppSelector<number>((state) => state.packs.params.page);
  // const pageCount = useAppSelector<number>(
  //   (state) => state.packs.params.pageCount
  // );
  const params = useAppSelector((state) => state.packs.params);
  const user_id = useAppSelector<string | null>((state) =>
    state.user.profile ? state.user.profile._id : null
  );

  const onAddPackHandler = () => {
    dispatch(packsThunks.addPack({ cardsPack: { name: "jajajaja" } }));
  };

  useEffect(() => {
    const payload = {
      packName: params.packName,
      page: params.page,
      pageCount: params.pageCount,
      min: params.min,
      max: params.max,
      user_id: params.isMyCards ? user_id : null,
    };
    dispatch(packsThunks.getPacks(payload));
  }, [dispatch, user_id, params]);

  if (!isLoggedIn) return <Navigate to={"/login"} />;

  return (
    <div className={style.packs}>
      <div className={style.title}>
        <Title title={"Packs list"} />
        <Button
          variant={"contained"}
          disabled={isLoading}
          onClick={onAddPackHandler}
        >
          add new pack
        </Button>
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
