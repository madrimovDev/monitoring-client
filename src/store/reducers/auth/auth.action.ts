import {api} from '@/api';
import {showNotification} from '@/lib/showNotification';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {type AxiosError} from 'axios';

export const login = createAsyncThunk(
  'auth/login',
  async (user: Auth.LoginRequest, {rejectWithValue}) => {
    try {
      const response = await api.post<Auth.User>('auth/login', user);
      window.localStorage.setItem('user', JSON.stringify(response.data));
      showNotification('info', 'Login Successful');
      return response.data;
    } catch (e) {
      const error = e as AxiosError<{message: string}>;
      showNotification('error', error.response?.data.message ?? '');

      return rejectWithValue(error.response?.data.message);
    }
  },
);
