import {api} from '@/api';
import {createAsyncThunk} from '@reduxjs/toolkit';
import type {AxiosError} from 'axios';

export const getAllAdmins = createAsyncThunk(
  'admins/getAll',
  async (_, {rejectWithValue}) => {
    try {
      const user = window.localStorage.getItem('user');
      const data = (await JSON.parse(user ?? '')) as Auth.User;
      const response = await api.get<Admins.AdminsResponse>(
        `organizations/${data.organizationId}/admins`,
      );
      return response.data;
    } catch (e) {
      const error = e as AxiosError<{message: string}>;
      return rejectWithValue(error.response?.data);
    }
  },
);
