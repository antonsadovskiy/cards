import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialAppState = {
    error: null as string | null,
    isLoading: true,
    isAppInitialized: false
};

export const initialAppStateType = typeof initialAppState

const appSlice = createSlice({
    name: 'app',
    initialState: initialAppState,
    reducers: {
        setIsLoading(state, action: PayloadAction<{ isLoading: boolean }>) {
            state.isLoading = action.payload.isLoading;
        },
        setError(state, action: PayloadAction<{ error: string | null }>) {
            state.error = action.payload.error;
        },
        setIsAppInitialized(state, action: PayloadAction<{ isAppInitialized: boolean }>) {
            state.isAppInitialized = action.payload.isAppInitialized;
        }
    }
});

export const appReducer = appSlice.reducer;
export const appActions = appSlice.actions;