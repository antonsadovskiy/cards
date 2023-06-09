import { RootState } from "app/store";

export const selectorQueryParams = (state: RootState) =>
  state.params.queryParams;
export const selectorSortPacks = (state: RootState) =>
  state.params.queryParams.sortPacks;
export const selectorPackName = (state: RootState) =>
  state.params.queryParams.packName;
export const selectorIsResetRange = (state: RootState) =>
  state.params.isResetRange;
export const selectorIsMyPacks = (state: RootState) => state.params.isMyPacks;
