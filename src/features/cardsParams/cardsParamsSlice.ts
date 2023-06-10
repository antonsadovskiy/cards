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

const initialState: CardsQueryParamsType = {
  cardAnswer: "",
  cardQuestion: "",
  cardsPack_id: "",
  min: 0,
  max: 100,
  sortCards: "",
  page: 1,
  pageCount: 4,
};

const slice = createSlice({
  name: "cardsParams",
  initialState,
  reducers: {
    clearParams: (state) => {
      state.cardsPack_id = "";
      state.cardAnswer = "";
      state.cardQuestion = "";
      state.min = 0;
      state.max = 100;
      state.sortCards = "";
      state.page = 1;
      state.pageCount = 4;
    },
    setCardsPackId: (
      state,
      action: PayloadAction<{ cardsPack_id: string }>
    ) => {
      state.cardsPack_id = action.payload.cardsPack_id;
    },
    setPage: (state, action: PayloadAction<{ page: number }>) => {
      state.page = action.payload.page;
    },
    setPageCount: (state, action: PayloadAction<{ pageCount: number }>) => {
      state.pageCount = action.payload.pageCount;
    },
    setSearch: (state, action: PayloadAction<{ cardQuestion: string }>) => {
      state.cardQuestion = action.payload.cardQuestion;
    },
  },
});

export const cardsParamsActions = slice.actions;
export const cardsParamsReducer = slice.reducer;
