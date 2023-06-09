import { RootState } from "app/store";

export const selectorCardPacks = (state: RootState) => state.packs.cardPacks;
export const selectorCardPacksTotalCount = (state: RootState) =>
  state.packs.cardPacksTotalCount;
export const selectorPageCount = (state: RootState) => state.packs.pageCount;
export const selectorPage = (state: RootState) => state.packs.page;
export const selectorMinCardsCount = (state: RootState) =>
  state.packs.minCardsCount;
export const selectorMaxCardsCount = (state: RootState) =>
  state.packs.maxCardsCount;
