import { RootState } from "app/store";

export const selectorCurrentCard = (state: RootState) =>
  state.learn.currentCard;
