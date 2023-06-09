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
import { QueryParamsType } from "features/params/paramsSlice";

export type PackStateType = {
  cardPacks: PackType[];
  page: number;
  pageCount: number;
  cardPacksTotalCount: number;
  minCardsCount: number;
  maxCardsCount: number;
};

const initialState: PackStateType = {
  cardPacks: [],
  page: 1,
  pageCount: 4,
  cardPacksTotalCount: 0,
  minCardsCount: 0,
  maxCardsCount: 100,
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
  QueryParamsType
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
    // const params = getState().params;
    // const user_id = getState().user.profile?._id;
    // const payload: GetPacksArgsType = {
    //   packName: params.params.packName,
    //   min: params.min,
    //   max: params.max,
    //   sortPacks: params.sortPacks,
    //   page: params.page,
    //   pageCount: params.pageCount,
    //   user_id: params.isMyCards ? user_id : null,
    // };
    const params = getState().params.queryParams;
    return thunkTryCatch(thunkAPI, async () => {
      await packsAPI.addPack(arg);
      dispatch(packsThunks.getPacks(params));
    });
  }
);
const deletePack = createAppAsyncThunk<void, DeletePackArgType>(
  "packs/delete",
  async (arg, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;
    const params = getState().params.queryParams;
    return thunkTryCatch(thunkAPI, async () => {
      await packsAPI.deletePack(arg);
      dispatch(packsThunks.getPacks(params));
    });
  }
);
const updatePack = createAppAsyncThunk<void, UpdatePackArgType>(
  "packs/add",
  async (arg, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;
    const params = getState().params.queryParams;
    return thunkTryCatch(thunkAPI, async () => {
      await packsAPI.updatePack(arg);
      dispatch(packsThunks.getPacks(params));
    });
  }
);

export const packsReducer = slice.reducer;
export const packsThunks = { getPacks, addPack, deletePack, updatePack };
