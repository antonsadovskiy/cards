import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AppStatusType = "idle" | "loading" | "success" | "error";

const initialAppState = {
  error: null as string | null,
  status: "idle" as AppStatusType,
  isAppInitialized: false,
};

export const initialAppStateType = typeof initialAppState;

const appSlice = createSlice({
  name: "app",
  initialState: initialAppState,
  reducers: {
    setStatus(state, action: PayloadAction<{ status: AppStatusType }>) {
      state.status = action.payload.status;
    },
    setError(state, action: PayloadAction<{ error: string | null }>) {
      state.error = action.payload.error;
    },
    setIsAppInitialized(
      state,
      action: PayloadAction<{ isAppInitialized: boolean }>
    ) {
      state.isAppInitialized = action.payload.isAppInitialized;
    },
  },
});

export const appReducer = appSlice.reducer;
export const appActions = appSlice.actions;
