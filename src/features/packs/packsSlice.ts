import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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

export type SortType = "" | "name" | "cardsCount" | "updated";

export type ParamsType = {
  packName: string;
  min: number;
  max: number;
  sortPacks: SortType;
  page: number;
  pageCount: number;
  isMyCards: boolean;
};
export type PackStateType = {
  cardPacks: CardPackType[];
  page: number;
  pageCount: number;
  cardPacksTotalCount: number;
  minCardsCount: number;
  maxCardsCount: number;
  params: ParamsType;
};

const initialState: PackStateType = {
  cardPacks: [],
  page: 1,
  pageCount: 4,
  cardPacksTotalCount: 0,
  minCardsCount: 0,
  maxCardsCount: 100,
  params: {
    page: 1,
    pageCount: 4,
    min: 0,
    max: 0,
    sortPacks: "",
    packName: "",
    isMyCards: false,
  },
};

const slice = createSlice({
  name: "packs",
  initialState,
  reducers: {
    setCardsCount: (state, action: PayloadAction<{ value: number[] }>) => {
      state.minCardsCount = action.payload.value[0];
      state.maxCardsCount = action.payload.value[1];
    },
    clearFilters: (state) => {
      state.params.page = 1;
      state.params.pageCount = 4;
      state.params.min = state.minCardsCount;
      state.params.max = state.maxCardsCount;
      state.params.packName = "";
      state.params.isMyCards = false;
    },
    setSearch: (state, action: PayloadAction<{ search: string }>) => {
      state.params.packName = action.payload.search;
    },
    setIsMyCards: (state, action: PayloadAction<{ isMyCards: boolean }>) => {
      state.params.isMyCards = action.payload.isMyCards;
    },

    setPage: (state, action: PayloadAction<{ page: number }>) => {
      state.params.page = action.payload.page;
    },
    setPageCount: (state, action: PayloadAction<{ pageCount: number }>) => {
      state.params.pageCount = action.payload.pageCount;
    },
    setRangeCardsCount: (state, action: PayloadAction<{ value: number[] }>) => {
      state.params.min = action.payload.value[0];
      state.params.max = action.payload.value[1];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(packsThunks.getPacks.fulfilled, (state, action) => {
      state.cardPacks = action.payload.packsData.cardPacks;
      state.cardPacksTotalCount = action.payload.packsData.cardPacksTotalCount;
      state.page = action.payload.packsData.page;
      state.pageCount = action.payload.packsData.pageCount;
      state.minCardsCount = action.payload.packsData.minCardsCount;
      state.maxCardsCount = action.payload.packsData.maxCardsCount;
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
