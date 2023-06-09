import { RootState } from "app/store";

export const selectorIsAppInitialized = (state: RootState) =>
  state.app.isAppInitialized;
export const selectorIsLoading = (state: RootState) => state.app.isLoading;
