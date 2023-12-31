import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import {
  registerUser, userLogout,
  userLogin, currentUser,
} from './authenticationApi';


export const registerUserAsync = createAsyncThunk(
  'authentication/userRegistration',
  async (data) => {
    const response = await registerUser(data);
    const authToken = response.headers.authorization;
    window.localStorage.setItem('authToken', authToken);
    return response.data;
  },
);

export const loginUserAsync = createAsyncThunk(
  'authentication/userLogin',
  async (data) => {
    const response = await userLogin(data);
    window.localStorage.setItem('authToken', response.headers.authorization);
    window.localStorage.setItem('user', JSON.stringify(response.data.data));
    return response.data;
  },
);

export const logoutUserAsync = createAsyncThunk(
  'authentication/userLogout',
  async () => {
    await userLogout();
    window.localStorage.clear();
  },
);

export const currentUserAsync = createAsyncThunk(
  'authentication/currentUser',
  async () => {
    const response = await currentUser();
    window.localStorage.setItem('user', JSON.stringify(response.data));
    return response.data;
  },
);

const authToken = window.localStorage.getItem('authToken');
const user = JSON.parse(window.localStorage.getItem('user'));

const initialState = {
  error: null,
  status: 'idle',
  isLoading: false,
  user: user || null,
  loggedIn: !!authToken,
  authToken: authToken || null,
};

const authenticationSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateStatus: (state, action) => {
      state.status = action.payload.status;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(registerUserAsync.pending, (state) => {
        state.isLoading = true;
        state.status = 'loading';
      })
      .addCase(registerUserAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.status = 'fulfilled';
      })
      .addCase(registerUserAsync.rejected, (state) => {
        state.isLoading = false;
        state.status = 'rejected';
      })

      // Login
      .addCase(loginUserAsync.pending, (state) => {
        state.isLoading = true;
        state.status = 'loading';
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.loggedIn = true;
        state.user = action.payload.data;
        state.status = 'fulfilled';
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.loggedIn = false;
        state.error = action.error.message;
        state.status = 'rejected';
      })

      // Get current user
      .addCase(currentUserAsync.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(currentUserAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.loggedIn = true;
      })

      // Logout
      .addCase(logoutUserAsync.pending, (state) => {
        state.isLoading = true;
        state.status = 'loading';
      })
      .addCase(logoutUserAsync.rejected, (state) => {
        state.loggedIn = false;
        state.status = 'rejected';
      })
      .addCase(logoutUserAsync.fulfilled, (state) => {
        state.isLoading = false;
        state.loggedIn = false;
        window.localStorage.clear();
        state.status = 'fulfilled';
        state.status = 'idle';
      })
  },
});

export const { updateStatus } = authenticationSlice.actions;
export default authenticationSlice.reducer;
