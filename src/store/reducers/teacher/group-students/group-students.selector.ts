import type {RootState} from '@/store/types';

type GroupStudents = RootState['teacherStore']['students'];

export const selectGroupStudents = (state: RootState): GroupStudents => state.teacherStore.students

