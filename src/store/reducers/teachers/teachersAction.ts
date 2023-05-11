import {api} from '@/api';
import {getUserDataFromLocalStorage} from '@/lib';
import {showNotification} from '@/lib/showNotification';
import {type AxiosErrorWithMessage} from '@/store/types';
import {createAsyncThunk} from '@reduxjs/toolkit';

const URL = 'teachers';

export const getAllTeachers = createAsyncThunk<
  Teachers.TeachersResponse,
  void,
  {
    rejectValue: string;
  }
>('teachers/getAll', async (_, {rejectWithValue}) => {
  try {
    const orgID = await getUserDataFromLocalStorage('organizationId');
    if (orgID === null) throw new Error('Organization id not found');
    const response = await api.get<Teachers.TeachersResponse>(`organizations/${orgID}/${URL}`);
    return response.data;
  } catch (e) {
    const error = e as AxiosErrorWithMessage;
    showNotification('error', error.response?.data.message ?? '');
    return rejectWithValue(error.response?.data.message ?? '');
  }
});

export const createTeacher = createAsyncThunk<
  Teachers.TeacherResponse,
  Teachers.NewTeacher,
  {
    rejectValue: string;
  }
>('teachers/create', async (teacher, {rejectWithValue}) => {
  try {
    const orgID = await getUserDataFromLocalStorage('organizationId');
    if (orgID === null) throw new Error('Organization id not found');
    const response = await api.post<Teachers.TeacherResponse>(`organizations/${orgID}/${URL}`, teacher);
    return response.data;
  } catch (e) {
    const error = e as AxiosErrorWithMessage;
    showNotification('error', error.response?.data.message ?? '');
    return rejectWithValue(error.response?.data.message ?? '');
  }
});

export const updateTeacher = createAsyncThunk<
  Teachers.TeacherResponse,
  {
    teacher: Teachers.NewTeacher;
    id: number;
  },
  {
    rejectValue: string;
  }
>('teachers/update', async ({teacher, id}, {rejectWithValue}) => {
  try {
    const orgID = await getUserDataFromLocalStorage('organizationId');
    if (orgID === null) throw new Error('Organization id not found');
    const response = await api.put<Teachers.TeacherResponse>(`organizations/${orgID}/${URL}/${id}`, teacher);
    return response.data;
  } catch (e) {
    const error = e as AxiosErrorWithMessage;
    showNotification('error', error.response?.data.message ?? '');
    return rejectWithValue(error.response?.data.message ?? '');
  }
});

export const deleteTeacher = createAsyncThunk<
  Teachers.TeacherResponse,
  number,
  {
    rejectValue: string;
  }
>('teacher/delete', async (id, {rejectWithValue}) => {
  try {
    const orgID = await getUserDataFromLocalStorage('organizationId');
    if (orgID === null) throw new Error('Organization id not found');
    const response = await api.delete<Teachers.TeacherResponse>(`organizations/${orgID}/${URL}/${id}`);
    return response.data;
  } catch (e) {
    const error = e as AxiosErrorWithMessage;
    showNotification('error', error.response?.data.message ?? '');
    return rejectWithValue(error.response?.data.message ?? '');
  }
});
