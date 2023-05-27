import type {RootState} from '@/store/types';

type Assessments = RootState['teacherStore']['assessments'];

export const selectAssessments = (state: RootState): Assessments => state.teacherStore.assessments
