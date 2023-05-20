import {api} from '@/api';
import {getUserDataFromLocalStorage} from '@/lib';
import {showNotification} from '@/lib/showNotification';
import {type AxiosErrorWithMessage} from '@/store/types';
import {type UseQueryResult, useQuery} from 'react-query';

export const useGetGroupStudents = (groupId: string | undefined): UseQueryResult<Students.StudentsResponse> => {
  return useQuery(
    'getGroupStudents',
    async () => {
      const orgId = await getUserDataFromLocalStorage('organizationId');
      if (orgId === null) throw new Error('Organizations id not found');
      if (groupId === undefined) return;
      const response = await api.get<Students.StudentsResponse>(`organizations/${orgId}/groups/${groupId}/students`);
      return response.data;
    },
    {
      onError(err) {
        const error = err as AxiosErrorWithMessage;
        showNotification('error', error.response?.data.message ?? '');
      },
    },
  );
};
