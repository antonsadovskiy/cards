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
import { ParamsType } from "features/params/paramsSlice";

const Packs = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector<boolean>((state) => state.user.isLoggedIn);
  const isLoading = useAppSelector<boolean>((state) => state.app.isLoading);

  const params = useAppSelector<ParamsType>((state) => state.params);
  const user_id = useAppSelector<string | null>((state) =>
    state.user.profile ? state.user.profile._id : null
  );

  const onAddPackHandler = () => {
    dispatch(packsThunks.addPack({ cardsPack: { name: "jajajaja" } }));
  };

  useEffect(() => {
    const payload = {
      ...params,
      user_id: params.isMyCards ? user_id : null,
    };
    dispatch(packsThunks.getPacks(payload));
  }, [dispatch, user_id, params, params.isMyCards]);

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
