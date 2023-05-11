import {createAction} from '@reduxjs/toolkit';

export const openTeacherDrawer = createAction('teacherDrawer/open');
export const openTeacherDrawerWithData = createAction<Teachers.Teacher>('teacherDrawer/openWithData');
export const closeTeacherDrawer = createAction('teacherDrawer/close');
