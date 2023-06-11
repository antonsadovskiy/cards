import { RootState } from "app/store";

export const selectorCardsQueryParams = (state: RootState) =>
  state.cardsParams.queryParams;
export const selectorCardsPackId = (state: RootState) =>
  state.cardsParams.queryParams.cardsPack_id;
export const selectorCardQuestion = (state: RootState) =>
  state.cardsParams.queryParams.cardQuestion;
export const selectorPage = (state: RootState) =>
  state.cardsParams.queryParams.page;
export const selectorPageCount = (state: RootState) =>
  state.cardsParams.queryParams.pageCount;
export const selectorSortCards = (state: RootState) =>
  state.cardsParams.queryParams.sortCards;
export const selectorCloseAddCardModal = (state: RootState) =>
  state.cardsParams.closeAddModal;
export const selectorCloseEditCardModal = (state: RootState) =>
  state.cardsParams.closeEditModal;
export const selectorCloseDeleteCardModal = (state: RootState) =>
  state.cardsParams.closeDeleteModal;
