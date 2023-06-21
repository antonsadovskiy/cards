import { RootState } from "app/store";

export const selectorCards = (state: RootState) => state.cards.cards;
export const selectorPackName = (state: RootState) => state.cards.packName;
export const selectorPackDeckCover = (state: RootState) =>
  state.cards.packDeckCover;
export const selectorPackUserId = (state: RootState) => state.cards.packUserId;
export const selectorCardsTotalCount = (state: RootState) =>
  state.cards.cardsTotalCount;
