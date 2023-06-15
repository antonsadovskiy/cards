import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "common/hooks";
import style from "./LearnPack.module.css";
import IconButton from "@mui/material/IconButton";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { selectorIsLoading } from "app/appSelectors";
import { selectorPackName } from "features/cards/cardsSelectors";
import { cardsThunks } from "features/cards/cardsSlice";
import Title from "common/components/Title/Title";
import Card from "features/learn/Card/Card";
import { learnActions } from "features/learn/learnSlice";
import { getCard } from "common/utils";
import Preloader from "common/components/Preloader/Preloader";
import {
  selectorCardsToLearn,
  selectorCurrentCard,
} from "features/learn/learnSelectors";
import { GradeType } from "features/cards/cardsAPI";

const LearnPack = () => {
  const dispatch = useAppDispatch();
  const params = useParams();

  const isLoading = useAppSelector(selectorIsLoading);
  const packName = useAppSelector(selectorPackName);
  const cards = useAppSelector(selectorCardsToLearn);
  const currentCard = useAppSelector(selectorCurrentCard);

  useEffect(() => {
    if (params.id) {
      dispatch(cardsThunks.getCards({ cardsPack_id: params.id }));
    }
  }, [dispatch, params.id]);

  useEffect(() => {
    dispatch(learnActions.changeCurrentCard({ card: getCard(cards) }));
  }, [dispatch, cards]);

  const showNextCardHandler = (cardId: string, grade: GradeType) => {
    dispatch(cardsThunks.updateCardGrade({ card_id: cardId, grade }));
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
