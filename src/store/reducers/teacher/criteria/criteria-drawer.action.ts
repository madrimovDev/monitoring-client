import { createAction } from '@reduxjs/toolkit'
import type { Criteria } from './types';

export const openCriteriaDrawer = createAction('criteriaDrawer/open');
export const openCriteriaDrawerWithData = createAction<Criteria.Criteria>('criteriaDrawer/openWithData');
export const closeCriteriaDrawer = createAction('criteriaDrawer/close')