import {api} from '@/api';
import {getUserDataFromLocalStorage} from '@/lib';
import type {AxiosErrorWithMessage} from '@/store/types';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const getGroupStudents = createAsyncThunk<
  Students.StudentsResponse,
  string | undefined,
  {
    rejectValue: string;
  }
>('group-students/getAll', async (groupId, {rejectWithValue}) => {
  try {
    const orgId = await getUserDataFromLocalStorage('organizationId');
    if (orgId === null) throw new Error('Organizations id not found');
    if (groupId === undefined) throw new Error('Group id not found');
    const response = await api.get<Students.StudentsResponse>(`organizations/${orgId}/groups/${groupId}/students`);
    return response.data;
  } catch (err) {
    const error = err as AxiosErrorWithMessage;
    return rejectWithValue(error.response?.data.message ?? '');
  }
});
