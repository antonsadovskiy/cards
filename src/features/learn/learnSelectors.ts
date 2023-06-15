import { RootState } from "app/store";

export const selectorCurrentCard = (state: RootState) =>
  state.learn.currentCard;
export const selectorCardsToLearn = (state: RootState) => state.learn.cards;
