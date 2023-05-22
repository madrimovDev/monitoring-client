import {api} from '@/api';
import {getUserDataFromLocalStorage} from '@/lib';
import type {AxiosErrorWithMessage} from '@/store/types';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const getAllLessons = createAsyncThunk<
  Lessons.LessonsResponse,
  number,
  {
    rejectValue: string;
  }
>('lessons/getLessons', async (id, {rejectWithValue}) => {
  try {
    const orgId = await getUserDataFromLocalStorage('organizationId');
    if (orgId === null) throw new Error('Organizations id not found');
    const response = await api.get<Lessons.LessonsResponse>(`/organizations/${orgId}/groups/${id}/lessons`);
    return response.data;
  } catch (e) {
    const error = e as AxiosErrorWithMessage;
    return rejectWithValue(error.response?.data.message ?? '');
  }
});
