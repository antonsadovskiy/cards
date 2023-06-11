import { RootState } from "app/store";

export const selectorPacksQueryParams = (state: RootState) =>
  state.packsParams.queryParams;
export const selectorSortPacks = (state: RootState) =>
  state.packsParams.queryParams.sortPacks;
export const selectorPackName = (state: RootState) =>
  state.packsParams.queryParams.packName;
export const selectorIsResetRange = (state: RootState) =>
  state.packsParams.isResetRange;
export const selectorIsMyPacks = (state: RootState) =>
  state.packsParams.isMyPacks;
export const selectorCloseEditPackModal = (state: RootState) =>
  state.packsParams.closeEditModal;
export const selectorCloseDeletePackModal = (state: RootState) =>
  state.packsParams.closeDeleteModal;
export const selectorCloseAddPackModal = (state: RootState) =>
  state.packsParams.closeAddModal;
