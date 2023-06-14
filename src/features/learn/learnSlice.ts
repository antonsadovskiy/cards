import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardType } from "features/cards/cardsAPI";

const initialState = {
  currentCard: {} as CardType,
};

const slice = createSlice({
  name: "learn",
  initialState,
  reducers: {
    changeCurrentCard: (state, action: PayloadAction<{ card: CardType }>) => {
      state.currentCard = action.payload.card;
    },
  },
});

export const learnActions = slice.actions;
export const learnReducer = slice.reducer;
