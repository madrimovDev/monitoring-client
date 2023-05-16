import {api} from '@/api';
import {getUserDataFromLocalStorage} from '@/lib';
import {showNotification} from '@/lib/showNotification';
import {type AxiosErrorWithMessage} from '@/store/types';
import {createAsyncThunk} from '@reduxjs/toolkit';

const URL = 'students';

export const getAllStudents = createAsyncThunk<
  Students.StudentsResponse,
  void,
  {
    rejectValue: string;
  }
>('students/getAll', async (_, {rejectWithValue}) => {
  try {
    const orgId = await getUserDataFromLocalStorage('organizationId');
    if (orgId === null) throw new Error('Organization id not found');
    const response = await api.get<Students.StudentsResponse>(`organizations/${orgId}/${URL}`);
    return response.data;
  } catch (e) {
    const error = e as AxiosErrorWithMessage;
    showNotification('error', error.response?.data.message ?? '');
    return rejectWithValue(error.response?.data.message ?? '');
  }
});

export const createStudent = createAsyncThunk<
  Students.StudentResponse,
  Omit<Students.NewStudent, 'birthday'>,
  {
    rejectValue: string;
  }
>('students/create', async (student, {rejectWithValue}) => {
  try {
    const orgId = await getUserDataFromLocalStorage('organizationId');
    if (orgId === null) throw new Error('Organization id not found');
    const response = await api.post<Students.StudentResponse>(`organizations/${orgId}/${URL}`, {
      ...student,
      birthday: '1999-12-12',
    });
    showNotification('info', response.data.message);
    return response.data;
  } catch (e) {
    const error = e as AxiosErrorWithMessage;
    showNotification('error', error.response?.data.message ?? '');
    return rejectWithValue(error.response?.data.message ?? '');
  }
});
