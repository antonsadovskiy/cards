import { createSlice } from "@reduxjs/toolkit";
import {
  cardsAPI,
  getCardsArgsType,
  GetCardsResponseType,
} from "features/cards/cardsAPI";
import { createAppAsyncThunk } from "common/utils";

const initialState = {
  cardPacks: [],
  cardPacksTotalCount: 0,
  maxCardsCount: 0,
  minCardsCount: 0,
  page: 1,
  pageCount: 4,
};

const slice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCards.fulfilled, (state, action) => {
      console.log(action.payload.data.cardPacks);
      // state.cardPacks = action.payload.data.cardPacks;
      state.cardPacksTotalCount = action.payload.data.cardPacksTotalCount;
      state.maxCardsCount = action.payload.data.maxCardsCount;
      state.minCardsCount = action.payload.data.minCardsCount;
      state.page = action.payload.data.page;
      state.pageCount = action.payload.data.pageCount;
    });
  },
});

const getCards = createAppAsyncThunk<
  { data: GetCardsResponseType },
  getCardsArgsType
>("cards/get", async (arg, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  try {
    const res = await cardsAPI.getCards(arg);
    return { data: res.data };
  } catch (e) {
    return rejectWithValue(null);
  }
});

export const cardsReducer = slice.reducer;
export const cardsThunks = { getCards };
