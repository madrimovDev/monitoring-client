import {api} from '@/api';
import {getUserDataFromLocalStorage} from '@/lib';
import {createAsyncThunk} from '@reduxjs/toolkit';
import type {AxiosError} from 'axios';
import {closeAdminDrawer} from '.';
import { showNotification } from '@/lib/showNotification';

export const getAllAdmins = createAsyncThunk(
  'admins/getAll',
  async (_, {rejectWithValue}) => {
    try {
      const orgID = await getUserDataFromLocalStorage('organizationId');

      if (orgID === null) throw new Error('organization id not found');

      const response = await api.get<Admins.AdminsResponse>(
        `organizations/${orgID}/admins`,
      );
      return response.data;
    } catch (e) {
      const error = e as AxiosError<{message: string}>;
      return rejectWithValue(error.response?.data);
    }
  },
);

export const createAdmin = createAsyncThunk(
  'admins/create',
  async (admin: Admins.CreateAdmin, {rejectWithValue, dispatch}) => {
    try {
      const orgID = await getUserDataFromLocalStorage('organizationId');
      if (orgID === null) throw new Error('organization id not found');

      const response = await api.post<Admins.AdminResponse>(
        `organizations/${orgID}/admins`,
        admin,
      );
      showNotification('info', response.data.message);
      dispatch(closeAdminDrawer());
      return response.data;
    } catch (e) {
      const error = e as AxiosError<{message: string}>;
      showNotification('error', error.response?.data.message ?? '');
      return rejectWithValue(error.response?.data);
    }
  },
);

export const updateAdmin = createAsyncThunk(
  'admins/update',
  async (
    {admin, id}: {admin: Admins.CreateAdmin; id: number},
    {rejectWithValue, dispatch},
  ) => {
    try {
      const orgID = await getUserDataFromLocalStorage('organizationId');
      if (orgID === null) throw new Error('organization id not found');

      const response = await api.put<Admins.AdminResponse>(
        `organizations/${orgID}/admins/${id}`,
        admin,
      );
      showNotification('info', response.data.message);
      dispatch(closeAdminDrawer());
      return response.data;
    } catch (e) {
      const error = e as AxiosError<{message: string}>;
      showNotification('error', error.response?.data.message ?? '');
      return rejectWithValue(error.response?.data);
    }
  },
);

export const deleteAdmin = createAsyncThunk(
  'admins/delete',
  async (id: number, {rejectWithValue, dispatch}) => {
    try {
      const orgID = await getUserDataFromLocalStorage('organizationId');
      if (orgID === null) throw new Error('organization id not found');

      const response = await api.delete<Admins.AdminResponse>(
        `organizations/${orgID}/admins/${id}`,
      );
      showNotification('info', response.data.message);
      dispatch(closeAdminDrawer());
      return response.data;
    } catch (e) {
      const error = e as AxiosError<{message: string}>;
      showNotification('error', error.response?.data.message ?? '');
      return rejectWithValue(error.response?.data);
    }
  },
);
