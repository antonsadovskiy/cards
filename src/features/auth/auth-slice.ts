import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authAPI } from 'features/auth/auth-api';

const register = createAsyncThunk('auth/register', async (arg, thunkAPI) => {
    const { dispatch, getState, rejectWithValue } = thunkAPI;
    try {
        const res = await authAPI.register({ email: 'antonsadovskiy6@gmail.com', password: '123987456' });
    } catch (e) {
        console.log(e);
    }
});
const login = createAsyncThunk('auth/login', async (arg, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;
    try {
        const res = await authAPI.login({
            email: 'antonsadovskiy6@gmail.com',
            password: '123987456',
            rememberMe: false
        });
    } catch (e) {
        console.log(e);
    }
});

const slice = createSlice({
    name: 'auth',
    initialState: {},
    reducers: {}
});

export const authReducer = slice.reducer;
export const authThunks = { register, login };