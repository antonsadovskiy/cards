import { createSlice } from "@reduxjs/toolkit";
import {
  ArgLoginType,
  ArgRegisterType,
  authAPI,
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
    debugger;
    return { profile: res.data };
  }
);

export const authReducer = slice.reducer;
export const authActions = slice.actions;
export const authThunks = { register, login };
