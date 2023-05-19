import type {RootState} from '@/store/types';

type Criteria = RootState['teacherStore']['criteria'];
type CriteriaDrawer = RootState['teacherStore']['criteriaDrawer'];

export const selectCriteria = (state: RootState): Criteria => state.teacherStore.criteria;
export const selectCriteriaDrawer = (state: RootState): CriteriaDrawer => state.teacherStore.criteriaDrawer;
