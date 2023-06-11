import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CardsQueryParamsType = {
  cardAnswer: string;
  cardQuestion: string;
  cardsPack_id: string;
  min: number;
  max: number;
  sortCards: string;
  page: number;
  pageCount: number;
};

export type CardsParamsType = {
  queryParams: CardsQueryParamsType;
  closeAddModal: boolean;
  closeEditModal: boolean;
  closeDeleteModal: boolean;
};

const initialState: CardsParamsType = {
  queryParams: {
    cardAnswer: "",
    cardQuestion: "",
    cardsPack_id: "",
    min: 0,
    max: 100,
    sortCards: "",
    page: 1,
    pageCount: 4,
  },
  closeAddModal: false,
  closeEditModal: false,
  closeDeleteModal: false,
};

const slice = createSlice({
  name: "cardsParams",
  initialState,
  reducers: {
    clearParams: (state) => {
      state.queryParams.cardsPack_id = "";
      state.queryParams.min = 0;
      state.queryParams.max = 100;
      state.queryParams.sortCards = "";
      state.queryParams.page = 1;
      state.queryParams.pageCount = 4;
    },
    setCardsPackId: (
      state,
      action: PayloadAction<{ cardsPack_id: string }>
    ) => {
      state.queryParams.cardsPack_id = action.payload.cardsPack_id;
    },
    setPage: (state, action: PayloadAction<{ page: number }>) => {
      state.queryParams.page = action.payload.page;
    },
    setPageCount: (state, action: PayloadAction<{ pageCount: number }>) => {
      state.queryParams.pageCount = action.payload.pageCount;
    },
    setSearch: (state, action: PayloadAction<{ cardQuestion: string }>) => {
      state.queryParams.cardQuestion = action.payload.cardQuestion;
    },
    setSortCards: (state, action: PayloadAction<{ sortCards: string }>) => {
      state.queryParams.sortCards = action.payload.sortCards;
    },
    setIsModalOpen: (
      state,
      action: PayloadAction<{
        type: "closeAddModal" | "closeEditModal" | "closeDeleteModal";
        close: boolean;
      }>
    ) => {
      state[action.payload.type] = action.payload.close;
    },
  },
});

export const cardsParamsActions = slice.actions;
export const cardsParamsReducer = slice.reducer;
