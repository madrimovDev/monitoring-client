import {type AxiosErrorWithMessage} from './../../types.d';
import {api} from '@/api';
import {getUserDataFromLocalStorage} from '@/lib';
import {showNotification} from '@/lib/showNotification';
import {createAsyncThunk} from '@reduxjs/toolkit';

const URL = 'groups';

export const getAllGroups = createAsyncThunk('groups/getAll', async (_, {rejectWithValue}) => {
  try {
    const ogrID = await getUserDataFromLocalStorage('organizationId');
    if (ogrID === null) throw new Error('Organizations id not found');
    const response = await api.get<Groups.GroupsResponse>(`/organizations/${ogrID}/${URL}`);
    return response.data;
  } catch (e) {
    const error = e as AxiosErrorWithMessage;
    showNotification('error', error.response?.data.message ?? '');
    return rejectWithValue(error.response?.data.message);
  }
});

export const createGroup = createAsyncThunk<Groups.GroupResponse, Groups.NewGroup, {rejectValue: string}>(
  'groups/create',
  async (group, {rejectWithValue}) => {
    try {
      const ogrID = await getUserDataFromLocalStorage('organizationId');
      if (ogrID === null) throw new Error('Organizations id not found');
      const response = await api.post<Groups.CreatedGroupResponse>(`/organizations/${ogrID}/${URL}`, group);
      showNotification('info', response.data.message);
      return {
        message: response.data.message,
        group: {
          ...response.data.group,
          status: 'active',
          teacher: null,
        },
      };
    } catch (e) {
      const error = e as AxiosErrorWithMessage;
      showNotification('error', error.response?.data.message ?? '');
      return rejectWithValue(error.response?.data.message ?? '');
    }
  },
);
