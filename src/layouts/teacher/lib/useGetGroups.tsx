import {api} from '@/api';
import {getUserDataFromLocalStorage} from '@/lib';
import {useQuery, type UseQueryResult} from 'react-query';

export const useGetGroups = (): UseQueryResult<Group.GroupResponse> => {
  return useQuery({
    queryKey: 'get-teacher-group',
    queryFn: async () => {
      const orgId = await getUserDataFromLocalStorage('organizationId');
      const teacherId = await getUserDataFromLocalStorage('userId');
      if (orgId === null) throw new Error('Organization id not found');
      if (teacherId === null) throw new Error('Organization id not found');
      const response = await api.get<Group.GroupResponse>(`organizations/${orgId}/teachers/${teacherId}/groups`);
      return response.data;
    },
  });
};
