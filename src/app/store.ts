import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import counterReducer from "features/counter/counterSlice";
import { appReducer } from "app/appSlice";
import { userReducer } from "features/auth/authSlice";
import { packsReducer } from "features/packs/packsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    app: appReducer,
    user: userReducer,
    packs: packsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

//@ts-ignore
window.state = store.getState();
