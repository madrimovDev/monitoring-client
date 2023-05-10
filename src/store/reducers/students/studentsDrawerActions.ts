import { createAction } from '@reduxjs/toolkit'

export const openStudentsDrawer = createAction('studentsDrawer/open')
export const openStudentsDrawerWithData = createAction<Students.Student>('studentsDrawer/openWithData');
export const closeStudentsDrawer = createAction('studentsDrawer/close');