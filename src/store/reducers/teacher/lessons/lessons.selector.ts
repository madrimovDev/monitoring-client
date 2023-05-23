import {type RootState} from '@/store/types';
import {createSelector} from '@reduxjs/toolkit';
import dayjs, {type Dayjs} from 'dayjs';

type Lessons = RootState['teacherStore']['lessons'];

export const getLessons = (state: RootState): Lessons => state.teacherStore.lessons;
export const lessonsDrawer = (state: RootState): RootState['teacherStore']['lessonsDrawer'] =>
  state.teacherStore.lessonsDrawer;

export const getLessonDataByDate = createSelector(
  (state: RootState) => state.teacherStore.lessons,
  (_: RootState, date: Dayjs) => date,
  (lessons, date) => {
    return lessons?.lessons?.find((lesson) => {
      if (dayjs(lesson?.date).month() === date.month() && dayjs(lesson?.date).date() === date.date()) {
        return lesson;
      }
      return false;
    });
  },
);

export const getLessonByID = createSelector(
  getLessons,
  (_: RootState, lessonID: string | undefined) => lessonID,
  (lessons, lessonID) => {
    if (lessons.lessons !== null && lessonID !== undefined) {
      return lessons.lessons.find((lesson) => lesson.id === +lessonID);
    }
    return undefined;
  },
);
