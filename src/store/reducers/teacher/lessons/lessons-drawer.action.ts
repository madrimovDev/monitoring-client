import {createAction} from '@reduxjs/toolkit';

export const openLessonsDrawer = createAction<{date?: string}>('lessonsDrawer/open');
export const closeLessonsDrawer = createAction('lessonsDrawer/close');
export const openLessonsDrawerWithData = createAction<Lessons.Lesson>('lessonsDrawer/openWithData');
