import {api} from '@/api';
import {createAsyncThunk} from '@reduxjs/toolkit';

const getAllAdmins = createAsyncThunk(
  'admins/getAll',
  async (_, {rejectWithValue}) => {
    try {
      const user = window.localStorage.getItem('user');
      const data = 
      const response = await api.get(`${organizationId}`);
    } catch (e) {}
  },
);
