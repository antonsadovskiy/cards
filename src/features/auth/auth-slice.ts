import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ArgLoginType,
  ArgRegisterType,
  authAPI,
  ForgotPasswordType,
  ProfileType,
} from "features/auth/auth-api";
import { createAppAsyncThunk } from "common/utils/createAppAsyncThunk";
import {
  profileAPI,
  UpdateUserResponseType,
  UserModelToUpdateType,
} from "features/profile/profile-api";
import { appActions } from "app/app-slice";

const initialState = {
  profile: null as ProfileType | null,
  isLoggedIn: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLoggedIn(state, action: PayloadAction<{ isLoggedIn: boolean }>) {
      state.isLoggedIn = action.payload.isLoggedIn;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.profile = action.payload.profile;
      })
      .addCase(me.fulfilled, (state, action) => {
        state.profile = action.payload.profile;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.profile = action.payload.profile;
      })
      .addCase(updateMe.fulfilled, (state, action) => {
        state.profile = action.payload.profile.updatedUser;
      });
  },
});

const register = createAppAsyncThunk<void, ArgRegisterType>(
  "auth/register",
  async (arg, thunkAPI) => {
    const res = await authAPI.register(arg);
  }
);
const login = createAppAsyncThunk<{ profile: ProfileType }, ArgLoginType>(
  "auth/login",
  async (arg, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const res = await authAPI.login(arg);
    dispatch(authActions.setIsLoggedIn({ isLoggedIn: true }));
    return { profile: res.data };
  }
);
const logout = createAppAsyncThunk<{ profile: null }>(
  "auth/logout",
  async (arg, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const res = await authAPI.logout();
    dispatch(authActions.setIsLoggedIn({ isLoggedIn: false }));
    return { profile: null };
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
const me = createAppAsyncThunk<{ profile: ProfileType }>(
  "auth/me",
  async (arg, thunkAPI) => {
    const { dispatch, rejectWithValue } = thunkAPI;
    const res = await authAPI.me();

    dispatch(authActions.setIsLoggedIn({ isLoggedIn: true }));
    return { profile: res.data };
  }
);
const updateMe = createAppAsyncThunk<
  { profile: UpdateUserResponseType },
  UserModelToUpdateType
>("profile/update", async (arg, thunkAPI) => {
  const res = await profileAPI.updateUser(arg);

  return { profile: res.data };
});

export const authReducer = slice.reducer;
export const authActions = slice.actions;
export const authThunks = { me, register, login, logout, forgot, updateMe };
