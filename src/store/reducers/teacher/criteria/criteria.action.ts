import {api} from '@/api';
import {getUserDataFromLocalStorage} from '@/lib';
import {showNotification} from '@/lib/showNotification';
import type {AxiosErrorWithMessage} from '@/store/types';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {type Criteria} from './types';

export const getAllCriteria = createAsyncThunk<
  Criteria.CriteriasResponse,
  void,
  {
    rejectValue: string;
  }
>('criteria/getAll', async (_, {rejectWithValue}) => {
  try {
    const orgId = await getUserDataFromLocalStorage('organizationId');
    if (orgId === null) throw new Error('Organization id not found');
    const response = await api.get<Criteria.CriteriasResponse>(`organizations/${orgId}/criterias`);
    return response.data;
  } catch (err) {
    const error = err as AxiosErrorWithMessage;
    showNotification('error', error.response?.data.message ?? '');
    return rejectWithValue(error.response?.data.message ?? '');
  }
});

export const createCriteria = createAsyncThunk<
  Criteria.CriteriaResponse,
  Criteria.NewCriteria,
  {
    rejectValue: string;
  }
>('criteria/create', async (criteria, {rejectWithValue}) => {
  try {
    const orgId = await getUserDataFromLocalStorage('organizationId');
    if (orgId === null) throw new Error('Organization id not found');
    const response = await api.post<Criteria.CriteriaResponse>(`organizations/${orgId}/criterias`, criteria);
    return response.data;
  } catch (err) {
    const error = err as AxiosErrorWithMessage;
    showNotification('error', error.response?.data.message ?? '');
    return rejectWithValue(error.response?.data.message ?? '');
  }
});
