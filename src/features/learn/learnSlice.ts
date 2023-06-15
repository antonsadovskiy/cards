import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardType, UpdateCardGradeResponseType } from "features/cards/cardsAPI";
import { cardsThunks } from "features/cards/cardsSlice";

const initialState = {
  cards: [] as CardType[],
  currentCard: {} as CardType,
};

const slice = createSlice({
  name: "learn",
  initialState,
  reducers: {
    changeCurrentCard: (state, action: PayloadAction<{ card: CardType }>) => {
      state.currentCard = action.payload.card;
    },
    updateCard: (
      state,
      action: PayloadAction<{ cardData: UpdateCardGradeResponseType }>
    ) => {
      const index = state.cards.findIndex(
        (card) => card._id === action.payload.cardData.updatedGrade.card_id
      );
      if (index !== -1)
        state.cards[index].grade = action.payload.cardData.updatedGrade.grade;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cardsThunks.getCards.fulfilled, (state, action) => {
      state.cards = action.payload.cardsData.cards;
    });
  },
});

export const learnActions = slice.actions;
export const learnReducer = slice.reducer;
