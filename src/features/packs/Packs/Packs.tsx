import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import style from "./Packs.module.css";
import Title from "common/components/Title/Title";
import Table from "features/packs/Packs/Table/Table";
import Search from "features/packs/Packs/Search/Search";
import ShowPacksCards from "features/packs/Packs/ShowPacksCards/ShowPacksCards";
import SetCardsCount from "features/packs/Packs/SetCardsCount/SetCardsCount";
import MyPagination from "features/packs/Packs/Pagination/Pagination";
import { usePacks } from "features/packs/hooks";
import { useLoading } from "common/hooks";
import { BasicModal } from "common/components/Modal/Modal";
import AddPackModal from "features/packs/Packs/Modals/AddPackModal/AddPackModal";
import Button from "@mui/material/Button";
import { packsThunks } from "features/packs/packsSlice";

const Packs = () => {
  const isLoading = useLoading();
  const { isLoggedIn, dispatch } = usePacks();

  // for opening modal
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // add pack callback
  const onAddPackHandler = (name: string, isPrivatePack: boolean) => {
    dispatch(
      packsThunks.addPack({
        cardsPack: { name, private: isPrivatePack },
      })
    );
  };

  if (!isLoggedIn) return <Navigate to={"/login"} />;

  return (
    <div className={style.packs}>
      <div className={style.title}>
        <Title title={"Packs list"} />
        <BasicModal
          onClose={handleClose}
          open={open}
          button={
            <Button
              variant={"contained"}
              disabled={isLoading}
              onClick={handleOpen}
            >
              Add new pack
            </Button>
          }
        >
          <AddPackModal
            onCloseModal={handleClose}
            onAddPackHandler={onAddPackHandler}
          />
        </BasicModal>
      </div>
      <div className={style.table}>
        <div className={style.filters}>
          <Search />
          <ShowPacksCards />
          <SetCardsCount />
        </div>
        <Table />
        <MyPagination />
      </div>
    </div>
  );
};

export default Packs;
