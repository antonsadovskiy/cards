import { createSlice } from "@reduxjs/toolkit";
import {
  ArgLoginType,
  ArgRegisterType,
  authAPI,
  ForgotPasswordResponseType,
  ForgotPasswordType,
  ProfileType,
} from "features/auth/auth-api";
import { createAppAsyncThunk } from "common/utils/createAppAsyncThunk";

const initialState = {
  profile: null as ProfileType | null,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.profile = action.payload.profile;
    });
  },
});

// 1 - what accepted, 2 - what returned
const register = createAppAsyncThunk<void, ArgRegisterType>(
  "auth/register",
  async (arg: ArgRegisterType, thunkAPI) => {
    const res = await authAPI.register(arg);
  }
);
const login = createAppAsyncThunk<{ profile: ProfileType }, ArgLoginType>(
  "auth/login",
  async (arg, thunkAPI) => {
    const res = await authAPI.login(arg);
    return { profile: res.data };
  }
);
const forgot = createAppAsyncThunk<{}, ForgotPasswordType>(
  "auth/forgot",
  async (arg, thunkAPI) => {
    const payload: ForgotPasswordType = {
      email: arg.email,
      message: arg.message,
      from: arg.from,
    };
    const res = await authAPI.forgot(payload);
  }
);

export const authReducer = slice.reducer;
export const authActions = slice.actions;
export const authThunks = { register, login, forgot };
