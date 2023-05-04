import {api} from '@/api';
import {getUserDataFromLocalStorage} from '@/lib';
import {showNotification} from '@/lib/showNotification';
import {type AxiosErrorWithMessage} from '@/store/types';
import {createAsyncThunk} from '@reduxjs/toolkit';

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
