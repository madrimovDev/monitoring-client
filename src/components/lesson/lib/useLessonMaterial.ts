import {getUserDataFromLocalStorage} from '@/lib';
import {type MaterialResponse} from './types';
import {api} from '@/api';
import {type UseMutateFunction, type UseMutationResult, type UseQueryResult, useQuery, useMutation} from 'react-query';

export const useLessonMaterial = (params: {
  groupID: string;
  lessonID: string;
}): {
  data: MaterialResponse | undefined;
  mutate: UseMutateFunction<MaterialResponse, unknown, string, unknown>;
} => {
  const getLessonMaterial = async (): Promise<MaterialResponse> => {
    const orgId = await getUserDataFromLocalStorage('organizationId');
    if (orgId === null) {
      throw new Error('Organizations id not found');
    }
    const response = await api.get<MaterialResponse>(
      `organizations/${orgId}/groups/${params.groupID}/lessons/${params.lessonID}/material`,
    );
    return response.data;
  };

  const updateLessonMaterial = async (html: string): Promise<MaterialResponse> => {
    const orgId = await getUserDataFromLocalStorage('organizationId');
    if (orgId === null) {
      throw new Error('Organizations id not found');
    }
    const response = await api.put<MaterialResponse>(
      `organizations/${orgId}/groups/${params.groupID}/lessons/${params.lessonID}/material`,
      {content: html},
    );
    return response.data;
  };

  const getLessonMaterialQuery: UseQueryResult<MaterialResponse> = useQuery('lessonMaterial', getLessonMaterial);
  const updateLessonMaterialMutation: UseMutationResult<MaterialResponse, unknown, string> = useMutation(
    'lessonMaterialUpdate',
    updateLessonMaterial,
    {
      onSuccess() {
        void getLessonMaterialQuery.refetch();
      },
    },
  );

  const {data} = getLessonMaterialQuery;
  const mutate = updateLessonMaterialMutation.mutate;

  return {
    data,
    mutate,
  };
};
