import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError, isAxiosError } from "axios";
import { toast } from "react-toastify";

const initialAppState = {
  error: null as string | null,
  isLoading: false,
  isAppInitialized: false,
};

export const initialAppStateType = typeof initialAppState;

const appSlice = createSlice({
  name: "app",
  initialState: initialAppState,
  reducers: {
    setStatus(state, action: PayloadAction<{ isLoading: boolean }>) {
      state.isLoading = action.payload.isLoading;
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
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => {
          if (action.type === "user/me/pending") return false;
          return action.type.endsWith("/pending");
        },
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state) => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        (action) => {
          if (action.type === "user/me/rejected") return false;
          return action.type.endsWith("/rejected");
        },
        (state, action) => {
          state.isLoading = false;
          if (!action.payload.showGlobalError) return;
          const err = action.payload.e as Error | AxiosError<{ error: string }>;
          if (isAxiosError(err)) {
            const error = err.response ? err.response.data.error : err.message;
            state.error = error;
            toast.error(error);
          } else {
            state.error = err.message;
            toast.error(err.message);
          }
        }
      );
  },
});

export const appReducer = appSlice.reducer;
export const appActions = appSlice.actions;
