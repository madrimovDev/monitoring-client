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

export const createGroup = createAsyncThunk<
  Groups.GroupResponse,
  Groups.NewGroup & {teacherId: number},
  {rejectValue: string}
>('groups/create', async (group, {rejectWithValue}) => {
  try {
    const orgID = await getUserDataFromLocalStorage('organizationId');
    if (orgID === null) throw new Error('Organizations id not found');
    const {teacherId, ...rest} = group;
    const {data: groups} = await api.post<Groups.CreatedGroupResponse>(`/organizations/${orgID}/${URL}`, rest);

    if (teacherId === null || teacherId === undefined) {
      showNotification('info', groups.message);
      return {
        message: groups.message,
        group: {
          ...groups.group,
          status: 'active',
          teacher: null,
        },
      };
    }

    const {data: teacher} = await api.put(`organizations/${orgID}/groups/${groups.group.id}/teacher`, {teacherId});
    showNotification('info', groups.message);
    return {
      message: groups.message,
      group: {
        ...groups.group,
        status: 'active',
        teacher: teacher.teacher,
      },
    };
  } catch (e) {
    const error = e as AxiosErrorWithMessage;
    showNotification('error', error.response?.data.message ?? '');
    return rejectWithValue(error.response?.data.message ?? '');
  }
});

export const updateGroup = createAsyncThunk<
  Groups.GroupResponse,
  {
    group: Groups.NewGroup & {teacherId: number};
    id: number;
  },
  {rejectValue: string}
>('groups/update', async ({group, id}, {rejectWithValue}) => {
  try {
    const orgID = await getUserDataFromLocalStorage('organizationId');
    if (orgID === null) throw new Error('Organizations id not found');
    const {teacherId, ...rest} = group;
    const {data: groups} = await api.put<Groups.CreatedGroupResponse>(`/organizations/${orgID}/${URL}/${id}`, rest);

    if (teacherId === null || teacherId === undefined) {
      showNotification('info', groups.message);
      return {
        message: groups.message,
        group: {
          ...groups.group,
          status: 'active',
          teacher: null,
        },
      };
    }
    const {data: teacher} = await api.put(`organizations/${orgID}/groups/${groups.group.id}/teacher`, {teacherId});
    showNotification('info', groups.message);
    return {
      message: groups.message,
      group: {
        ...groups.group,
        status: 'active',
        teacher: teacher.teacher,
      },
    };
  } catch (e) {
    const error = e as AxiosErrorWithMessage;
    showNotification('error', error.response?.data.message ?? '');
    return rejectWithValue(error.response?.data.message ?? '');
  }
});

export const deleteGroup = createAsyncThunk<
  Groups.GroupResponse,
  number,
  {
    rejectValue: string;
  }
>('groups/delete', async (id, {rejectWithValue}) => {
  try {
    const orgID = await getUserDataFromLocalStorage('organizationId');
    if (orgID === null) throw new Error('Organizations id not found');
    const {data: groups} = await api.delete<Groups.GroupResponse>(`/organizations/${orgID}/${URL}/${id}`);
    return groups;
  } catch (e) {
    const error = e as AxiosErrorWithMessage;
    showNotification('error', error.response?.data.message ?? '');
    return rejectWithValue(error.response?.data.message ?? '');
  }
});
