import { createSlice } from "@reduxjs/toolkit";
import {
  AddPackArgType,
  CardPackType,
  DeletePackArgType,
  GetPacksArgsType,
  GetPacksResponseType,
  packsAPI,
  UpdatePackArgType,
} from "features/packs/packsAPI";
import { createAppAsyncThunk, thunkTryCatch } from "common/utils";
import { paramsActions } from "features/params/paramsSlice";

export type PackStateType = {
  cardPacks: CardPackType[];
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
    builder
      .addCase(packsThunks.getPacks.fulfilled, (state, action) => {
        state.cardPacks = action.payload.packsData.cardPacks;
        state.cardPacksTotalCount =
          action.payload.packsData.cardPacksTotalCount;
        state.page = action.payload.packsData.page;
        state.pageCount = action.payload.packsData.pageCount;
        state.minCardsCount = action.payload.packsData.minCardsCount;
        state.maxCardsCount = action.payload.packsData.maxCardsCount;
      })
      .addCase(paramsActions.clearFilters, (state) => {
        state.minCardsCount = 0;
        state.maxCardsCount = 100;
      });
  },
});

const getPacks = createAppAsyncThunk<
  { packsData: GetPacksResponseType },
  GetPacksArgsType
>("packs/get", async (arg, thunkAPI) => {
  return thunkTryCatch(thunkAPI, async () => {
    const res = await packsAPI.getPacks(arg);
    return { packsData: res.data };
  });
});
const addPack = createAppAsyncThunk<void, AddPackArgType>(
  "packs/add",
  async (arg, thunkAPI) => {
    return thunkTryCatch(thunkAPI, async () => {
      const res = await packsAPI.addPack(arg);
    });
  }
);
const deletePack = createAppAsyncThunk<void, DeletePackArgType>(
  "packs/delete",
  async (arg, thunkAPI) => {
    return thunkTryCatch(thunkAPI, async () => {
      const res = await packsAPI.deletePack(arg);
    });
  }
);
const updatePack = createAppAsyncThunk<void, UpdatePackArgType>(
  "packs/add",
  async (arg, thunkAPI) => {
    return thunkTryCatch(thunkAPI, async () => {
      const res = await packsAPI.updatePack(arg);
    });
  }
);

export const packsActions = slice.actions;
export const packsReducer = slice.reducer;
export const packsThunks = { getPacks, addPack, deletePack, updatePack };
