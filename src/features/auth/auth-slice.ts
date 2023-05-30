import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ArgLoginType,
  ArgRegisterType,
  authAPI,
  ForgotPasswordType,
  ProfileType,
  SetNewPasswordType,
} from "features/auth/auth-api";
import { createAppAsyncThunk } from "common/utils/createAppAsyncThunk";
import {
  profileAPI,
  UpdateUserResponseType,
  UserModelToUpdateType,
} from "features/profile/profile-api";
import { appActions } from "app/app-slice";
import { redirect } from "react-router-dom";

const initialState = {
  profile: null as ProfileType | null,
  isLoggedIn: false,
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsLoggedIn(state, action: PayloadAction<{ isLoggedIn: boolean }>) {
      state.isLoggedIn = action.payload.isLoggedIn;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(me.fulfilled, (state, action) => {
        state.profile = action.payload.profile;
      })
      .addCase(login.fulfilled, (state, action) => {
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
  "user/register",
  async (arg, thunkAPI) => {
    const res = await authAPI.register(arg);
  }
);
const me = createAppAsyncThunk<{ profile: ProfileType }, void>(
  "user/me",
  async (arg, thunkAPI) => {
    const { dispatch, rejectWithValue } = thunkAPI;
    try {
      const res = await authAPI.me();
      dispatch(userActions.setIsLoggedIn({ isLoggedIn: true }));
      return { profile: res.data };
    } catch (e) {
      return rejectWithValue(null);
    } finally {
      dispatch(appActions.setIsAppInitialized({ isAppInitialized: true }));
    }
  }
);
const login = createAppAsyncThunk<{ profile: ProfileType }, ArgLoginType>(
  "user/login",
  async (arg, thunkAPI) => {
    const { dispatch, rejectWithValue } = thunkAPI;
    dispatch(appActions.setStatus({ status: "loading" }));
    try {
      const res = await authAPI.login(arg);
      dispatch(userActions.setIsLoggedIn({ isLoggedIn: true }));
      dispatch(appActions.setStatus({ status: "success" }));
      return { profile: res.data };
    } catch (e) {
      dispatch(appActions.setStatus({ status: "error" }));
      return rejectWithValue(null);
    }
  }
);
const logout = createAppAsyncThunk<{ profile: null }>(
  "user/logout",
  async (arg, thunkAPI) => {
    const { dispatch, rejectWithValue } = thunkAPI;
    dispatch(appActions.setStatus({ status: "loading" }));
    try {
      const res = await authAPI.logout();
      dispatch(userActions.setIsLoggedIn({ isLoggedIn: false }));
      dispatch(appActions.setStatus({ status: "success" }));
      return { profile: null };
    } catch (e) {
      dispatch(appActions.setStatus({ status: "error" }));
      return rejectWithValue(null);
    }
  }
);
const forgot = createAppAsyncThunk<void, ForgotPasswordType>(
  "user/forgot",
  async (arg, thunkAPI) => {
    const { dispatch, rejectWithValue } = thunkAPI;
    const payload: ForgotPasswordType = {
      email: arg.email,
      message: arg.message,
      from: arg.from,
    };
    dispatch(appActions.setStatus({ status: "loading" }));
    try {
      const res = await authAPI.forgot(payload);
      dispatch(appActions.setStatus({ status: "success" }));
      dispatch(redirect("/check-email"));
    } catch (e) {
      dispatch(appActions.setStatus({ status: "error" }));
      return rejectWithValue(null);
    }
  }
);
const setNewPassword = createAppAsyncThunk<void, SetNewPasswordType>(
  "user/set-new-password",
  async (arg, thunkAPI) => {
    const { dispatch, rejectWithValue } = thunkAPI;
    try {
      const res = await authAPI.setNewPassword(arg);
      dispatch(redirect("/check-email"));
    } catch (e) {
      return rejectWithValue(null);
    }
  }
);
const updateMe = createAppAsyncThunk<
  { profile: UpdateUserResponseType },
  UserModelToUpdateType
>("user/update", async (arg, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  dispatch(appActions.setStatus({ status: "loading" }));
  try {
    const res = await profileAPI.updateUser(arg);
    dispatch(appActions.setStatus({ status: "success" }));
    return { profile: res.data };
  } catch (e) {
    dispatch(appActions.setStatus({ status: "error" }));
    return rejectWithValue(null);
  }
});

export const userReducer = slice.reducer;
export const userActions = slice.actions;
export const userThunks = {
  me,
  register,
  login,
  logout,
  forgot,
  setNewPassword,
  updateMe,
};
