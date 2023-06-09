import { createSlice } from "@reduxjs/toolkit";
import { createAppAsyncThunk, thunkTryCatch } from "common/utils";
import {
  AddCardArgType,
  cardsAPI,
  CardsQueryParamsType,
  CardType,
  DeleteCardArgType,
  GetCardsResponseType,
  UpdateCardArgType,
  UpdateCardGradeArgType,
} from "features/cards/cardsAPI";
import { learnActions } from "features/learn/learnSlice";

export type CardsStateType = {
  cards: CardType[];
  packName: string;
  packDeckCover: string;
  cardsTotalCount: number;
  maxGrade: number;
  minGrade: number;
  page: number;
  pageCount: number;
  packUserId: string;
};

const initialState: CardsStateType = {
  cards: [],
  packName: "",
  packDeckCover: "",
  cardsTotalCount: 0,
  maxGrade: 5,
  minGrade: 0,
  page: 1,
  pageCount: 4,
  packUserId: "",
};

const slice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    clearCardsState: (state) => {
      state.cards = [];
      state.cardsTotalCount = 0;
      state.maxGrade = 5;
      state.minGrade = 0;
      state.page = 1;
      state.pageCount = 4;
      state.packUserId = "";
      state.packName = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cardsThunks.getCards.fulfilled, (state, action) => {
      state.cards = action.payload.cardsData.cards;
      state.cardsTotalCount = action.payload.cardsData.cardsTotalCount;
      state.maxGrade = action.payload.cardsData.maxGrade;
      state.minGrade = action.payload.cardsData.minGrade;
      state.page = action.payload.cardsData.page;
      state.pageCount = action.payload.cardsData.pageCount;
      state.packUserId = action.payload.cardsData.packUserId;
      state.packName = action.payload.cardsData.packName;
      state.packDeckCover = action.payload.cardsData.packDeckCover;
    });
  },
});

const getCards = createAppAsyncThunk<
  { cardsData: GetCardsResponseType },
  CardsQueryParamsType
>("cards/get", async (arg, thunkAPI) => {
  return thunkTryCatch(thunkAPI, async () => {
    const res = await cardsAPI.getCards(arg);
    return { cardsData: res.data };
  });
});
const addCard = createAppAsyncThunk<void, AddCardArgType>(
  "cards/add",
  async (arg, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;
    const cardsParams = getState().cardsParams.queryParams;
    return thunkTryCatch(thunkAPI, async () => {
      await cardsAPI.addCard(arg);
      dispatch(cardsThunks.getCards(cardsParams));
    });
  }
);
const deleteCard = createAppAsyncThunk<void, DeleteCardArgType>(
  "cards/delete",
  async (arg, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;
    const cardsParams = getState().cardsParams.queryParams;
    return thunkTryCatch(thunkAPI, async () => {
      await cardsAPI.deleteCard(arg);
      dispatch(cardsThunks.getCards(cardsParams));
    });
  }
);
const updateCard = createAppAsyncThunk<void, UpdateCardArgType>(
  "cards/update",
  async (arg, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;
    const cardsParams = getState().cardsParams.queryParams;
    return thunkTryCatch(thunkAPI, async () => {
      await cardsAPI.updateCard(arg);
      dispatch(cardsThunks.getCards(cardsParams));
    });
  }
);
const updateCardGrade = createAppAsyncThunk<void, UpdateCardGradeArgType>(
  "cards/updateGrade",
  async (arg, thunkAPI) => {
    const { dispatch } = thunkAPI;
    return thunkTryCatch(thunkAPI, async () => {
      const res = await cardsAPI.updateCardGrade(arg);
      dispatch(learnActions.updateCard({ cardData: res.data }));
    });
  }
);

export const cardsReducer = slice.reducer;
export const cardsActions = slice.actions;
export const cardsThunks = {
  getCards,
  addCard,
  deleteCard,
  updateCard,
  updateCardGrade,
};
