import { createSlice } from "@reduxjs/toolkit";
import {
  AddPackArgType,
  DeletePackArgType,
  GetPacksResponseType,
  packsAPI,
  PackType,
  UpdatePackArgType,
} from "features/packs/packsAPI";
import { createAppAsyncThunk, thunkTryCatch } from "common/utils";
import { PacksQueryParamsType } from "features/packsParams/packsParamsSlice";

export type PacksStateType = {
  cardPacks: PackType[];
  page: number;
  pageCount: number;
  cardPacksTotalCount: number;
  minCardsCount: number;
  maxCardsCount: number;
};

const initialState: PacksStateType = {
  cardPacks: [],
  page: 1,
  pageCount: 4,
  cardPacksTotalCount: 0,
  minCardsCount: 0,
  maxCardsCount: 0,
};

const slice = createSlice({
  name: "packs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(packsThunks.getPacks.fulfilled, (state, action) => {
      state.cardPacks = action.payload.packsData.cardPacks;
      state.cardPacksTotalCount = action.payload.packsData.cardPacksTotalCount;
      state.page = action.payload.packsData.page;
      state.pageCount = action.payload.packsData.pageCount;
      if (
        action.payload.packsData.minCardsCount === 0 &&
        action.payload.packsData.maxCardsCount === 0
      ) {
        return;
      }
      state.minCardsCount = action.payload.packsData.minCardsCount;
      state.maxCardsCount = action.payload.packsData.maxCardsCount;
    });
  },
});

const getPacks = createAppAsyncThunk<
  { packsData: GetPacksResponseType },
  PacksQueryParamsType
>("packs/get", async (arg, thunkAPI) => {
  return thunkTryCatch(thunkAPI, async () => {
    const res = await packsAPI.getPacks(arg);
    return { packsData: res.data };
  });
});
const addPack = createAppAsyncThunk<void, AddPackArgType>(
  "packs/add",
  async (arg, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;
    const packsParams = getState().packsParams.queryParams;
    return thunkTryCatch(thunkAPI, async () => {
      await packsAPI.addPack(arg);
      dispatch(packsThunks.getPacks(packsParams));
    });
  }
);
const deletePack = createAppAsyncThunk<void, DeletePackArgType>(
  "packs/delete",
  async (arg, thunkAPI) => {
    return thunkTryCatch(thunkAPI, async () => {
      await packsAPI.deletePack(arg);
    });
  }
);
const updatePack = createAppAsyncThunk<void, UpdatePackArgType>(
  "packs/add",
  async (arg, thunkAPI) => {
    // const { dispatch, getState } = thunkAPI;
    // const packsParams = getState().packsParams.queryParams;
    return thunkTryCatch(thunkAPI, async () => {
      await packsAPI.updatePack(arg);
      // dispatch(packsThunks.getPacks(packsParams));
    });
  }
);

export const packsReducer = slice.reducer;
export const packsThunks = { getPacks, addPack, deletePack, updatePack };
