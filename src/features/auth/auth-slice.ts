import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ArgLoginType, ArgRegisterType, authAPI } from "features/auth/auth-api";

const register = createAsyncThunk(
    "auth/register",
    async (arg: ArgRegisterType, thunkAPI) => {
        const { dispatch, getState, rejectWithValue } = thunkAPI;
        try {
            const res = await authAPI.register(arg);
        } catch (e) {
            console.log(e);
        }
    }
);
const login = createAsyncThunk(
    "auth/login",
    async (arg: ArgLoginType, thunkAPI) => {
        const { dispatch, getState, rejectWithValue } = thunkAPI;
        try {
            const res = await authAPI.login(arg);
        } catch (e) {
            console.log(e);
        }
    }
);

const slice = createSlice({
    name: "auth",
    initialState: {},
    reducers: {},
});

export const authReducer = slice.reducer;
export const authThunks = { register, login };
