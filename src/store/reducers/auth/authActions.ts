import {api} from '@/api';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {type AxiosError} from 'axios';

export const login = createAsyncThunk(
  'auth/login',
  async (user: Auth.LoginRequest, {rejectWithValue}) => {
    try {
      const response = await api.post<Auth.User>('auth/login', user);
      window.localStorage.setItem('user', JSON.stringify(response.data));
      return response.data;
    } catch (e) {
      const error = e as AxiosError<{message: string}>;
      return rejectWithValue(error.response?.data.message);
    }
  },
);
