import {combineReducers} from '@reduxjs/toolkit';
import {criteriaReducer} from './criteria/criteria.reducer';
import {criteriaDrawerReducer} from './criteria/criteria-drawer.reducer';

export const teacherReducers = combineReducers({
  criteria: criteriaReducer,
  criteriaDrawer: criteriaDrawerReducer,
});
