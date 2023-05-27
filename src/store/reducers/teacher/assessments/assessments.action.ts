import {api} from '@/api';
import {getUserDataFromLocalStorage} from '@/lib';
import type {AxiosErrorWithMessage} from '@/store/types';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const getAllAssessments = createAsyncThunk<
  Assessments.AssessmentsResponse,
  {
    groupId: string | undefined;
    lessonId: string | undefined;
  },
  {
    rejectValue: string;
  }
>('assessments/gelAll', async ({groupId, lessonId}, {rejectWithValue}) => {
  try {
    const orgId = await getUserDataFromLocalStorage('organizationId');
    if (orgId === null || groupId === undefined || lessonId === undefined) throw new Error('Organization id not found');

    const response = await api.get<Assessments.AssessmentsResponse>(
      `organizations/${orgId}/groups/${groupId}/lessons/${lessonId}/assessments`,
    );
    return response.data;
  } catch (err) {
    const error = err as AxiosErrorWithMessage;

    return rejectWithValue(error.response?.data.message ?? '');
  }
});
