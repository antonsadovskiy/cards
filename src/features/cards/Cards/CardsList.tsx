import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { cardsParamsActions } from "features/cardsParams/cardsParamsSlice";
import { cardsThunks } from "features/cards/cardsSlice";
import style from "features/cards/Cards/CardsList.module.css";
import IconButton from "@mui/material/IconButton";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Table from "common/components/Table/Table";
import Title from "common/components/Title/Title";
import Button from "@mui/material/Button";
import Search from "common/components/Search/Search";
import { selectorUserId } from "features/auth/authSelectors";
import { selectorIsLoading } from "app/appSelectors";
import MyPagination from "common/components/Pagination/Pagination";
import CardsTable from "features/cards/Cards/CardsTable/CardsTable";
import MoreButton from "features/cards/Cards/CardsTable/MoreButton/MoreButton";
import { BasicModal } from "common/components/Modal/Modal";
import AddCardModal from "features/cards/Cards/Modals/AddCardModal";
import { useModalHandle } from "common/hooks/useModalHandle";
import {
  selectorCardQuestion,
  selectorCardsPackId,
  selectorCardsQueryParams,
  selectorPage,
  selectorPageCount,
} from "features/cardsParams/cardsParamsSelectors";
import {
  selectorCards,
  selectorCardsTotalCount,
  selectorPackName,
  selectorPackUserId,
} from "features/cards/cardsSelectors";

const CardsList = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const { addCardHandler } = useModalHandle(params.id);

  const cardsParams = useAppSelector(selectorCardsQueryParams);
  const packName = useAppSelector(selectorPackName);
  const cardsPack_id = useAppSelector(selectorCardsPackId);
  const userId = useAppSelector(selectorUserId);
  const packUserId = useAppSelector(selectorPackUserId);
  const isLoading = useAppSelector(selectorIsLoading);
  const cards = useAppSelector(selectorCards);
  const cardQuestion = useAppSelector(selectorCardQuestion);
  const page = useAppSelector(selectorPage);
  const pageCount = useAppSelector(selectorPageCount);
  const cardsTotalCount = useAppSelector(selectorCardsTotalCount);

  const isMyPack = userId === packUserId;

  useEffect(() => {
    if (params.id) {
      dispatch(cardsParamsActions.setCardsPackId({ cardsPack_id: params.id }));
    }
  }, []);
  useEffect(() => {
    if (cardsParams.cardsPack_id) {
      dispatch(cardsThunks.getCards(cardsParams));
    }
  }, [dispatch, cardsParams]);
  const onDebouncedHandler = (cardQuestion: string) => {
    dispatch(cardsParamsActions.setSearch({ cardQuestion }));
  };
  const learnToPackHandler = () => {
    console.log("LEARN");
  };
  const changePageHandler = (page: number) => {
    dispatch(cardsParamsActions.setPage({ page }));
  };
  const changePageCountHandler = (pageCount: number) => {
    dispatch(cardsParamsActions.setPageCount({ pageCount }));
  };

  return (
    <div className={style.cardsList}>
      <NavLink
        to={"/packs"}
        className={isLoading ? style.disabled : style.returnBack}
      >
        <IconButton>
          <KeyboardBackspaceIcon />
        </IconButton>
        <p className={style.btnLabel}>Back to Packs List</p>
      </NavLink>
      <div className={style.title}>
        <div className={style.titleAndMore}>
          <Title title={packName} />
          {isMyPack && <MoreButton packId={cardsPack_id} packName={packName} />}
        </div>
        {isMyPack ? (
          <BasicModal type={"addCardModal"}>
            <AddCardModal addCardHandler={addCardHandler} />
          </BasicModal>
        ) : (
          <Button
            variant={"contained"}
            disabled={isLoading}
            onClick={learnToPackHandler}
          >
            learn to pack
          </Button>
        )}
      </div>
      <Search
        value={cardQuestion}
        onDebouncedHandler={onDebouncedHandler}
        fullWidth={true}
      />
      <Table ifNotFound={"cards"} entity={cards}>
        <CardsTable />
      </Table>
      <MyPagination
        page={page}
        pageCount={pageCount}
        totalCount={cardsTotalCount}
        changePageHandler={changePageHandler}
        changePageCountHandler={changePageCountHandler}
      />
    </div>
  );
};

export default CardsList;
