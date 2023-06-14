import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "common/hooks";
import style from "./LearnPack.module.css";
import IconButton from "@mui/material/IconButton";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { selectorIsLoading } from "app/appSelectors";
import { selectorCards, selectorPackName } from "features/cards/cardsSelectors";
import { cardsThunks } from "features/cards/cardsSlice";
import Title from "common/components/Title/Title";
import Card from "features/learn/Card/Card";
import { learnActions } from "features/learn/learnSlice";
import { getCard } from "common/utils";
import Preloader from "common/components/Preloader/Preloader";
import { selectorCurrentCard } from "features/learn/learnSelectors";

const LearnPack = () => {
  const dispatch = useAppDispatch();
  const params = useParams();

  const isLoading = useAppSelector(selectorIsLoading);
  const packName = useAppSelector(selectorPackName);
  const cards = useAppSelector(selectorCards);
  const currentCard = useAppSelector(selectorCurrentCard);

  useEffect(() => {
    if (params.id) {
      dispatch(cardsThunks.getCards({ cardsPack_id: params.id }));
    }
  }, [dispatch, params.id]);

  useEffect(() => {
    const card = getCard(cards);
    dispatch(learnActions.changeCurrentCard({ card }));
  }, [dispatch, cards]);

  const showNextCardHandler = () => {
    const card = getCard(cards);
    dispatch(learnActions.changeCurrentCard({ card }));
  };

  return (
    <div className={style.learnPackContainer}>
      <NavLink
        to={"/packs/" + params.id}
        className={isLoading ? style.disabled : style.returnBack}
      >
        <IconButton>
          <KeyboardBackspaceIcon />
        </IconButton>
        <p className={style.btnLabel}>Back to Cards List</p>
      </NavLink>
      <div className={style.learnPack}>
        {isLoading && <Preloader />}
        {!isLoading && (
          <>
            <Title title={`Learn "${packName}"`} />
            <Card
              showNextCardHandler={showNextCardHandler}
              card={currentCard}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default LearnPack;
