import type {RootState} from '@/store/types';

type Assessments = RootState['teacherStore']['assessments'];
type AssessmentsModal = RootState['teacherStore']['assessmentsModal'];

export const selectAssessments = (state: RootState): Assessments => state.teacherStore.assessments
export const selectAssessmentModal = (state: RootState): AssessmentsModal => state.teacherStore.assessmentsModal 