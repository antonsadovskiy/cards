import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "common/hooks";
import {
  cardsParamsActions,
  CardsQueryParamsType,
} from "features/cardsParams/cardsParamsSlice";
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
import { CardType } from "features/cards/cardsAPI";
import MoreButton from "features/cards/Cards/CardsTable/MoreButton/MoreButton";

const CardsList = () => {
  const dispatch = useAppDispatch();
  const params = useParams();

  const cardsParams = useAppSelector<CardsQueryParamsType>(
    (state) => state.cardsParams
  );
  const packName = useAppSelector((state) => state.cards.packName);
  const userId = useAppSelector(selectorUserId);
  const packUserId = useAppSelector((state) => state.cards.packUserId);
  const isLoading = useAppSelector(selectorIsLoading);
  const cards = useAppSelector<CardType[]>((state) => state.cards.cards);

  const isMyPack = userId === packUserId;

  const page = useAppSelector((state) => state.cardsParams.page);
  const pageCount = useAppSelector((state) => state.cardsParams.pageCount);
  const cardsTotalCount = useAppSelector(
    (state) => state.cards.cardsTotalCount
  );

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
  const addCardHandler = () => {
    if (params.id) {
      dispatch(cardsThunks.addCard({ card: { cardsPack_id: params.id } }));
    }
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
      <NavLink to={"/packs"} className={style.returnBack}>
        <IconButton>
          <KeyboardBackspaceIcon />
        </IconButton>
        <p>Back to Packs List</p>
      </NavLink>
      <div className={style.title}>
        <div className={style.titleAndMore}>
          <Title title={packName} />
          <MoreButton />
        </div>
        {isMyPack ? (
          <Button
            variant={"contained"}
            disabled={isLoading}
            onClick={addCardHandler}
          >
            add new card
          </Button>
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
      <Search onDebouncedHandler={onDebouncedHandler} fullWidth={true} />
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
