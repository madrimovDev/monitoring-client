import {getUserDataFromLocalStorage} from '@/lib';
import {type MaterialResponse} from './types';
import {api} from '@/api';
import {type UseMutateFunction, type UseMutationResult, type UseQueryResult, useQuery, useMutation} from 'react-query';
import {useEffect, useState} from 'react';

export const useLessonMaterial = (params: {
  groupID: string;
  lessonID: string;
}): {
  data: MaterialResponse | undefined;
  mutate: UseMutateFunction<MaterialResponse, unknown, string, unknown>;
  isLoading: boolean;
} => {
  const [data, setData] = useState<MaterialResponse>();
  const [isLoading, setIsLoading] = useState(false);
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

  const getLessonMaterialQuery: UseQueryResult<MaterialResponse> = useQuery('lessonMaterial', getLessonMaterial, {
    onSuccess(d) {
      setData(d);
    },
  });
  const updateLessonMaterialMutation: UseMutationResult<MaterialResponse, unknown, string> = useMutation(
    'lessonMaterialUpdate',
    updateLessonMaterial,
    {
      onSuccess(d) {
        setData(d);
      },
    },
  );

  useEffect(() => {
    if (getLessonMaterialQuery.isLoading || updateLessonMaterialMutation.isLoading) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [getLessonMaterialQuery.isLoading, getLessonMaterialQuery.isFetching, updateLessonMaterialMutation.isLoading]);

  const mutate = updateLessonMaterialMutation.mutate;

  return {
    data,
    mutate,
    isLoading,
  };
};
