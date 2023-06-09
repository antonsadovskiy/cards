import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SortByType = "name" | "cardsCount" | "updated";

export type PacksQueryParamsType = {
  packName: string;
  min: number;
  max: number;
  sortPacks: string;
  page: number;
  pageCount: number;
  user_id: string | null;
};

export type PacksParamsType = {
  queryParams: PacksQueryParamsType;
  isMyPacks: boolean;
  isResetRange: boolean;
  closeAddModal: boolean;
  closeEditModal: boolean;
  closeDeleteModal: boolean;
};

const initialState: PacksParamsType = {
  queryParams: {
    page: 1,
    pageCount: 4,
    min: 0,
    max: 0,
    sortPacks: "",
    packName: "",
    user_id: null,
  },
  isMyPacks: false,
  isResetRange: false,
  closeAddModal: false,
  closeEditModal: false,
  closeDeleteModal: false,
};

const slice = createSlice({
  name: "packsParams",
  initialState,
  reducers: {
    clearFilters: (state) => {
      state.queryParams.page = 1;
      state.queryParams.pageCount = 4;
      state.queryParams.min = 0;
      state.queryParams.max = 0;
      state.queryParams.sortPacks = "";
      state.queryParams.packName = "";
      state.queryParams.user_id = null;
      state.isMyPacks = false;
      state.isResetRange = true;
    },
    setPackName: (state, action: PayloadAction<{ packName: string }>) => {
      state.queryParams.packName = action.payload.packName;
    },
    setIsMyPacks: (state, action: PayloadAction<{ isMyPacks: boolean }>) => {
      state.isMyPacks = action.payload.isMyPacks;
    },
    setUserId: (state, action: PayloadAction<{ userId: string | null }>) => {
      state.queryParams.user_id = action.payload.userId;
    },
    setPage: (state, action: PayloadAction<{ page: number }>) => {
      state.queryParams.page = action.payload.page;
    },
    setPageCount: (state, action: PayloadAction<{ pageCount: number }>) => {
      state.queryParams.pageCount = action.payload.pageCount;
    },
    setRangeCardsCount: (state, action: PayloadAction<{ value: number[] }>) => {
      state.queryParams.min = action.payload.value[0];
      state.queryParams.max = action.payload.value[1];
    },
    setSortPacks: (state, action: PayloadAction<{ sortPacks: string }>) => {
      state.queryParams.sortPacks = action.payload.sortPacks;
    },
    setIsResetRange: (
      state,
      action: PayloadAction<{ isResetRange: boolean }>
    ) => {
      state.isResetRange = action.payload.isResetRange;
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

export const packsParamsReducer = slice.reducer;
export const packsParamsActions = slice.actions;
