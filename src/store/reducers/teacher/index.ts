import {combineReducers} from '@reduxjs/toolkit';
import {criteriaReducer} from './criteria/criteria.reducer';
import {criteriaDrawerReducer} from './criteria/criteria-drawer.reducer';
import {lessonsReducer} from './lessons/lessons.reducer';
import {lessonsDrawerReducer} from './lessons/lessons-drawer.reducer';
import {groupStudentsReducer} from './group-students/group-students.reducer';
import {assessmentsReducer} from './assessments/assessments.reducer';
import { assessmentModalReducer } from './assessments/assessments-modal.reducer';

export const teacherReducers = combineReducers({
  criteria: criteriaReducer,
  criteriaDrawer: criteriaDrawerReducer,
  students: groupStudentsReducer,
  assessments: assessmentsReducer,
  assessmentsModal: assessmentModalReducer,
  lessons: lessonsReducer,
  lessonsDrawer: lessonsDrawerReducer,
});
