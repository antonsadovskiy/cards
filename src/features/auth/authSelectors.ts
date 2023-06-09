import { RootState } from "app/store";

export const selectorEmail = (state: RootState) => state.user.tempEmail;
export const selectorIsLoggedIn = (state: RootState) => state.user.isLoggedIn;
export const selectorUserId = (state: RootState) =>
  state.user.profile ? state.user.profile._id : null;
export const selectorProfile = (state: RootState) => state.user.profile;
