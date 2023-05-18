import type {RootState} from '@/store/types';

type Criteria = RootState['teacherStore']['criteria'];

export const selectCriteria = (state: RootState): Criteria => state.teacherStore.criteria;
