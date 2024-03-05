import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../../utils/axios';
import { toast } from 'react-toastify';

const initialState = {
    email: null,
    token: null,
    isLoading: false,
    status: null,
}


export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({ email, password }) => {
        try {
            const { data } = await axios.post('/v1/auth/login', {
                email,
                password,
            })
            if(data.token){
                window.localStorage.setItem('myAppToken', data.token)
            }
            return data
        } catch (error){
            console.error(error);
            if(error.response.status === 422){
                toast(error.response.data.detail[0].error, error.response.data.detail[1].error);
            } else {
                toast(error.response.data.detail);
            }
        }
    }
)


export const resetPass = createAsyncThunk(
    'auth/reset',
    async ({ rejectWithValue }) => {
        try {
            const { email } = await axios.post('/v1/auth/password-reset')
            if(email){
                window.localStorage.getItem('myAppToken')
                window.localStorage.removeItem('myAppToken')
            }
            return email
        } catch (error){
            console.error(error);
            toast(error.response.data.detail[0].error);
            return rejectWithValue(error.response.data); // Reject the promise with the error data
        }
    }
)

export const forgotPass = createAsyncThunk(
    'auth/forgotPass',
    async ({ rejectWithValue }) => {
        try {
            const { email } = await axios.post('/v1/auth/password-set')
            return email
        } catch (error){
            console.error(error);
            toast(error.response.data.detail[0].error);
            return rejectWithValue(error.response.data); // Reject the promise with the error data
        }
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.email = null
            state.token = null
            state.isLoading = false
            state.status = null
        }
    },
    extraReducers: (builder) => {
        builder
        //Login user
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.status = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.status = action.payload?.message;
                state.email = action.payload?.email;
                state.token = action.payload?.token;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = action.payload?.message || 'Something went wrong';
                state.isLoading = false;
            })
        //Reset pass
            .addCase(resetPass.pending, (state) => {
                state.isLoading = true;
                state.status = null;
            })
            .addCase(resetPass.fulfilled, (state, action) => {
                state.isLoading = false;
                state.status = action.payload?.message;
            })
            .addCase(resetPass.rejected, (state, action) => {
                state.status = action.payload?.message || 'Something went wrong';
                state.isLoading = false;
            })
        //Reset pass
            .addCase(forgotPass.pending, (state) => {
                state.isLoading = true;
                state.status = null;
            })
            .addCase(forgotPass.fulfilled, (state, action) => {
                state.isLoading = false;
                state.status = action.payload?.message;
            })
            .addCase(forgotPass.rejected, (state, action) => {
                state.status = action.payload?.message || 'Something went wrong';
                state.isLoading = false;
            })
    }
})

export const checkIsAuth = (state) => Boolean(state.auth.token)

export const {logout} = authSlice.actions

export default authSlice.reducer;