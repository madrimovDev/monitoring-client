import {api} from '@/api';
import {getUserDataFromLocalStorage} from '@/lib';
import {type UseQueryResult, useQuery} from 'react-query';
import {type MaterialResponse} from './types';

export const useGetLessonMaterial = (params: {groupID: string; lessonID: string}): UseQueryResult<MaterialResponse> => {
  return useQuery('lessonMaterial', async () => {
    const orgId = await getUserDataFromLocalStorage('organizationId');
    if (orgId === null) {
      throw new Error('Organizations id not found');
    }
    const response = await api.get<MaterialResponse>(
      `organizations/${orgId}/groups/${params.groupID}/lessons/${params.lessonID}/material`,
    );
    return response.data;
  });
};
