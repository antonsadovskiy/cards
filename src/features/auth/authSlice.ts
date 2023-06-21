import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ArgLoginType,
  ArgRegisterType,
  authAPI,
  ForgotPasswordType,
  ProfileType,
  SetNewPasswordType,
} from "features/auth/authAPI";
import { createAppAsyncThunk, thunkTryCatch } from "common/utils";
import {
  profileAPI,
  UpdateUserResponseType,
  UserModelToUpdateType,
} from "features/profile/profileAPI";
import { appActions } from "app/appSlice";

const initialState = {
  profile: null as ProfileType | null,
  isLoggedIn: false,
  tempEmail: "",
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsLoggedIn(state, action: PayloadAction<{ isLoggedIn: boolean }>) {
      state.isLoggedIn = action.payload.isLoggedIn;
    },
    setTempEmail(state, action: PayloadAction<{ tempEmail: string }>) {
      state.tempEmail = action.payload.tempEmail;
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

const me = createAppAsyncThunk<{ profile: ProfileType }, void>(
  "user/me",
  async (arg, thunkAPI) => {
    const { dispatch, rejectWithValue } = thunkAPI;
    try {
      const res = await authAPI.me();
      dispatch(userActions.setIsLoggedIn({ isLoggedIn: true }));
      return { profile: res.data };
    } catch (e) {
      dispatch(userActions.setIsLoggedIn({ isLoggedIn: false }));
      return rejectWithValue(null);
    } finally {
      dispatch(appActions.setIsAppInitialized({ isAppInitialized: true }));
    }
  }
);
const register = createAppAsyncThunk<void, ArgRegisterType>(
  "user/register",
  async (arg, thunkAPI) => {
    return thunkTryCatch(thunkAPI, async () => {
      await authAPI.register(arg);
    });
  }
);
const login = createAppAsyncThunk<{ profile: ProfileType }, ArgLoginType>(
  "user/login",
  async (arg, thunkAPI) => {
    const { dispatch } = thunkAPI;
    return thunkTryCatch(thunkAPI, async () => {
      const res = await authAPI.login(arg);
      dispatch(userActions.setIsLoggedIn({ isLoggedIn: true }));
      return { profile: res.data };
    });
  }
);
const logout = createAppAsyncThunk<{ profile: null }>(
  "user/logout",
  async (arg, thunkAPI) => {
    const { dispatch } = thunkAPI;
    return thunkTryCatch(thunkAPI, async () => {
      await authAPI.logout();
      dispatch(userActions.setIsLoggedIn({ isLoggedIn: false }));
      return { profile: null };
    });
  }
);
const forgot = createAppAsyncThunk<void, ForgotPasswordType>(
  "user/forgot",
  async (arg, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const payload: ForgotPasswordType = {
      email: arg.email,
      message: arg.message,
      from: arg.from,
    };
    return thunkTryCatch(thunkAPI, async () => {
      await authAPI.forgot(payload);
      dispatch(userActions.setTempEmail({ tempEmail: arg.email }));
    });
  }
);
const setNewPassword = createAppAsyncThunk<void, SetNewPasswordType>(
  "user/set-new-password",
  async (arg, thunkAPI) => {
    return thunkTryCatch(thunkAPI, async () => {
      await authAPI.setNewPassword(arg);
    });
  }
);
const updateMe = createAppAsyncThunk<
  { profile: UpdateUserResponseType },
  UserModelToUpdateType
>("user/update", async (arg, thunkAPI) => {
  return thunkTryCatch(thunkAPI, async () => {
    const res = await profileAPI.updateUser(arg);
    return { profile: res.data };
  });
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
