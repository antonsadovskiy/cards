import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { packsThunks } from "features/packs/packsSlice";

export type SortByType = "name" | "cardsCount" | "updated";

export type ParamsType = {
  packName: string;
  min: number;
  max: number;
  sortPacks: string;
  page: number;
  pageCount: number;
  isMyCards: boolean;
  isResetRange: boolean;
  modalIsOpen: boolean;
};

const initialState: ParamsType = {
  page: 1,
  pageCount: 4,
  min: 0,
  max: 0,
  sortPacks: "",
  packName: "",
  isMyCards: false,
  isResetRange: false,
  modalIsOpen: false,
};

const slice = createSlice({
  name: "params",
  initialState,
  reducers: {
    clearFilters: (state) => {
      state.page = 1;
      state.pageCount = 4;
      state.min = 0;
      state.max = 0;
      state.sortPacks = "";
      state.packName = "";
      state.isMyCards = false;
      state.isResetRange = true;
    },
    setPackName: (state, action: PayloadAction<{ packName: string }>) => {
      state.packName = action.payload.packName;
    },
    setIsMyCards: (state, action: PayloadAction<{ isMyCards: boolean }>) => {
      state.isMyCards = action.payload.isMyCards;
    },
    setPage: (state, action: PayloadAction<{ page: number }>) => {
      state.page = action.payload.page;
    },
    setPageCount: (state, action: PayloadAction<{ pageCount: number }>) => {
      state.pageCount = action.payload.pageCount;
    },
    setRangeCardsCount: (state, action: PayloadAction<{ value: number[] }>) => {
      state.min = action.payload.value[0];
      state.max = action.payload.value[1];
    },
    setSortPacks: (state, action: PayloadAction<{ sortPacks: string }>) => {
      state.sortPacks = action.payload.sortPacks;
    },
    setIsResetRange: (
      state,
      action: PayloadAction<{ isResetRange: boolean }>
    ) => {
      state.isResetRange = action.payload.isResetRange;
    },
    setModalIsOpen: (
      state,
      action: PayloadAction<{ modalIsOpen: boolean }>
    ) => {
      state.modalIsOpen = action.payload.modalIsOpen;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(packsThunks.addPack.fulfilled, (state) => {
      state.modalIsOpen = false;
    });
  },
});

export const paramsReducer = slice.reducer;
export const paramsActions = slice.actions;
