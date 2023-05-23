import {combineReducers} from '@reduxjs/toolkit';
import {criteriaReducer} from './criteria/criteria.reducer';
import {criteriaDrawerReducer} from './criteria/criteria-drawer.reducer';
import {lessonsReducer} from './lessons/lessons.reducer';
import {lessonsDrawerReducer} from './lessons/lessons-drawer.reducer';

export const teacherReducers = combineReducers({
  criteria: criteriaReducer,
  criteriaDrawer: criteriaDrawerReducer,
  lessons: lessonsReducer,
  lessonsDrawer: lessonsDrawerReducer,
});
