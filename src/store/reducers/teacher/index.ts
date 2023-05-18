import {combineReducers} from '@reduxjs/toolkit';
import {criteriaReducer} from './criteria/criteria.reducer';

export const teacherReducers = combineReducers({
  criteria: criteriaReducer,
});
