import {api} from '@/api';
import {getUserDataFromLocalStorage} from '@/lib';
import {showNotification} from '@/lib/showNotification';
import {type AxiosErrorWithMessage} from '@/store/types';
import {createAsyncThunk} from '@reduxjs/toolkit';

const URL = 'teachers';

export const getAllTeachers = createAsyncThunk<
  Teachers.TeachersResponse,
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  void,
  {
    rejectValue: string;
  }
>('teachers/getAll', async (_, {rejectWithValue}) => {
  try {
    const orgID = await getUserDataFromLocalStorage('organizationId');
    if (orgID === null) throw new Error('Organization id not found');
    const response = await api.get<Teachers.TeachersResponse>(
      `organizations/${orgID}/${URL}`,
    );
    return response.data;
  } catch (e) {
    const error = e as AxiosErrorWithMessage;
    showNotification('error', error.response?.data.message ?? '');
    return rejectWithValue(error.response?.data.message ?? '');
  }
});
