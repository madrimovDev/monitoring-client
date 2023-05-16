import {combineReducers} from '@reduxjs/toolkit';
import {adminsReducers} from './admins/admins.reducer';
import {adminsDrawerReducer} from './admins/admins-drawer.reducer';
import {directionsReducer} from './directions/directions.reducer';
import {directionsModalReducer} from './directions/directions-modal.reducer';
import {groupsReducer} from './groups/groups.reducer';
import {groupsDrawerReducer} from './groups/groups-drawer.reducer';
import {studentsReducer} from './students/students.reducer';
import {studentsDrawerReducer} from './students/students-drawer.reducer';
import {teachersReducer} from './teachers/teachers.reducer';
import {teachersDrawerReducer} from './teachers/teachers-drawer.reducer';

export const adminReducers = combineReducers({
  admins: adminsReducers,
  adminsDrawer: adminsDrawerReducer,
  directions: directionsReducer,
  directionsDrawer: directionsModalReducer,
  groups: groupsReducer,
  groupsDrawer: groupsDrawerReducer,
  students: studentsReducer,
  studentsDrawer: studentsDrawerReducer,
  teachers: teachersReducer,
  teachersDrawer: teachersDrawerReducer,
});
