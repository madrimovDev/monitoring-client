import {api} from '@/api';
import {showNotification} from '@/lib/showNotification';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {type AxiosError} from 'axios';

type AuthResponse = {
  [key in keyof Auth.User]: key extends 'token' ? never : Auth.User[key];
};

export const login = createAsyncThunk('auth/login', async (user: Auth.LoginRequest, {rejectWithValue}) => {
  try {
    const response = await api.post<AuthResponse>('auth/login', user);
    window.localStorage.setItem('user', JSON.stringify(response.data));
    showNotification('info', 'Login Successful');
    return response.data;
  } catch (e) {
    const error = e as AxiosError<{message: string}>;
    showNotification('error', error.response?.data.message ?? '');

    return rejectWithValue(error.response?.data.message);
  }
});

export const verify = createAsyncThunk('auth/verify', async (_, {rejectWithValue}) => {
  try {
    const response = await api.get<AuthResponse>('auth/verify');
    showNotification('info', 'Login Successful');
    return response.data;
  } catch (e) {
    const error = e as AxiosError<{message: string}>;
    showNotification('error', error.response?.data.message ?? '');

    return rejectWithValue(error.response?.data.message);
  }
});
