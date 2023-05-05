import {api} from '@/api';
import {getUserDataFromLocalStorage} from '@/lib';
import {showNotification} from '@/lib/showNotification';
import {type AxiosErrorWithMessage} from '@/store/types';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {closeDirectionModal} from '.';

const URL = 'directions';

export const getAllDirections = createAsyncThunk(
  'directions/getAll',
  async (_, {rejectWithValue}) => {
    try {
      const orgID = await getUserDataFromLocalStorage('organizationId');

      if (orgID === null) throw new Error('organization id not found');

      const response = await api.get<Directions.DirectionsResponse>(
        `organizations/${orgID}/${URL}`,
      );
      return response.data;
    } catch (e) {
      const error = e as AxiosErrorWithMessage;
      showNotification('error', error.response?.data.message ?? '');
      return rejectWithValue(error.response?.data.message);
    }
  },
);

export const createDirection = createAsyncThunk(
  'directions/create',
  async (name: string, {rejectWithValue, dispatch}) => {
    try {
      const orgID = await getUserDataFromLocalStorage('organizationId');

      if (orgID === null) throw new Error('organization id not found');

      const response = await api.post<Directions.DirectionResponse>(
        `organizations/${orgID}/${URL}`,
        {name},
      );
      dispatch(closeDirectionModal());
      showNotification('info', response.data.message);
      return response.data;
    } catch (e) {
      const error = e as AxiosErrorWithMessage;
      showNotification('error', error.response?.data.message ?? '');
      return rejectWithValue(error.response?.data.message);
    }
  },
);

export const updateDirection = createAsyncThunk(
  'directions/update',
  async (
    {name, id}: {name: string; id: number},
    {rejectWithValue, dispatch},
  ) => {
    try {
      const orgID = await getUserDataFromLocalStorage('organizationId');

      if (orgID === null) throw new Error('organization id not found');

      const response = await api.put<Directions.DirectionResponse>(
        `organizations/${orgID}/${URL}/${id}`,
        {name},
      );
      dispatch(closeDirectionModal());
      showNotification('info', response.data.message);
      return response.data;
    } catch (e) {
      const error = e as AxiosErrorWithMessage;
      showNotification('error', error.response?.data.message ?? '');
      return rejectWithValue(error.response?.data.message);
    }
  },
);

export const deleteDirection = createAsyncThunk(
  'directions/delete',
  async (id: number, {rejectWithValue, dispatch}) => {
    try {
      const orgID = await getUserDataFromLocalStorage('organizationId');

      if (orgID === null) throw new Error('organization id not found');

      const response = await api.delete<Directions.DirectionResponse>(
        `organizations/${orgID}/${URL}/${id}`,
      );
      dispatch(closeDirectionModal());
      showNotification('info', response.data.message);
      return response.data;
    } catch (e) {
      const error = e as AxiosErrorWithMessage;
      showNotification('error', error.response?.data.message ?? '');
      return rejectWithValue(error.response?.data.message);
    }
  },
);
