import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  cardsAPI,
  CardsPackType,
  getCardsArgsType,
  GetCardsResponseType,
} from "features/cards/cardsAPI";
import { createAppAsyncThunk, thunkTryCatch } from "common/utils";

const initialState = {
  cardPacks: [] as CardsPackType[],
  page: 1,
  pageCount: 4,
  cardPacksTotalCount: 0,
  minCardsCount: 0,
  maxCardsCount: 0,
  search: "",
  isMyCards: false,
};

const slice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<{ search: string }>) => {
      state.search = action.payload.search;
    },
    setIsMyCards: (state, action: PayloadAction<{ isMyCards: boolean }>) => {
      state.isMyCards = action.payload.isMyCards;
    },
    setCardsCount: (state, action: PayloadAction<{ value: number[] }>) => {
      state.minCardsCount = action.payload.value[0];
      state.maxCardsCount = action.payload.value[1];
    },
    setPage: (state, action: PayloadAction<{ page: number }>) => {
      state.page = action.payload.page;
    },
    setPageCount: (state, action: PayloadAction<{ pageCount: number }>) => {
      state.pageCount = action.payload.pageCount;
    },
    setCards: (state, action: PayloadAction<{ cards: CardsPackType[] }>) => {
      state.cardPacks = action.payload.cards;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cardsThunks.getCards.fulfilled, (state, action) => {
      state.cardPacks = action.payload.cards.cardPacks;
      state.cardPacksTotalCount = action.payload.cards.cardPacksTotalCount;
      state.minCardsCount = action.payload.cards.minCardsCount;
      state.maxCardsCount = action.payload.cards.maxCardsCount;
      state.page = action.payload.cards.page;
      state.pageCount = action.payload.cards.pageCount;
    });
  },
});

const getCards = createAppAsyncThunk<
  { cards: GetCardsResponseType },
  getCardsArgsType
>("cards/get", async (arg, thunkAPI) => {
  return thunkTryCatch(
    thunkAPI,
    async () => {
      const res = await cardsAPI.getCards(arg);
      return { cards: res.data };
    },
    false
  );
});

export const cardsActions = slice.actions;
export const cardsReducer = slice.reducer;
export const cardsThunks = { getCards };
