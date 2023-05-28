import {api} from '@/api';
import {getUserDataFromLocalStorage} from '@/lib';
import {showNotification} from '@/lib/showNotification';
import {useEffect, useState} from 'react';
import {useMutation, useQuery} from 'react-query';
import {useParams} from 'react-router-dom';

interface UseGroupStudents {
  loading: boolean;
  students: Students.Student[];
  addStudent: (data: {studentId: number[]}) => void;
  removeStudent: (id: number) => void;
}

export const useGroupStudents = (callback?: VoidFunction): UseGroupStudents => {
  const [loading, setLoading] = useState(false);
  const [students, setStudents] = useState<Students.Student[]>([]);
  const {groupID} = useParams();
  const getStudents = useQuery({
    queryKey: 'group/students',
    queryFn: async () => {
      const orgId = await getUserDataFromLocalStorage('organizationId');
      if (orgId === null) throw new Error('OrganizationID not found');
      const response = await api.get<Students.StudentsResponse>(
        `organizations/${orgId}/groups/${groupID ?? ''}/students`,
      );
      return response.data;
    },
    onSuccess(data) {
      setStudents(data.students);
    },
  });

  const postStudent = useMutation({
    mutationKey: 'add-students',
    mutationFn: async (data: {studentId: number[]}) => {
      const orgId = await getUserDataFromLocalStorage('organizationId');
      if (orgId === null) throw new Error('Organization id not found');
      const response = await api.post<Students.StudentResponse>(
        `organizations/${orgId}/groups/${groupID ?? ''}/students`,
        data,
      );
      return response.data;
    },
    onSuccess(data) {
      showNotification('info', data.message);
      void getStudents.refetch();
      if (callback !== undefined) {
        callback();
      }
    },
  });

  const deleteStudent = useMutation({
    mutationKey: 'remove-student',
    mutationFn: async (id: number) => {
      const orgId = await getUserDataFromLocalStorage('organizationId');
      if (orgId === null) throw new Error('Organization id not found');
      await api.delete<Students.StudentResponse>(`organizations/${orgId}/groups/${groupID ?? ''}/students/${id}`);
      return id;
    },
    onSuccess(data) {
      setStudents(students.filter((s) => s.id !== data));
    },
  });

  const addStudent = (data: {studentId: number[]}): void => {
    postStudent.mutate(data);
  };

  const removeStudent = (id: number): void => {
    deleteStudent.mutate(id);
  };

  useEffect(() => {
    if (getStudents.isLoading || getStudents.isLoading || deleteStudent.isLoading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [getStudents.isLoading, postStudent.isLoading, deleteStudent.isLoading]);

  return {
    loading,
    students,
    addStudent,
    removeStudent,
  };
};
