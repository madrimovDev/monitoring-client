import {createReducer, isFulfilled, isPending, isRejected} from '@reduxjs/toolkit';
import {createLesson, getAllLessons} from './lessons.action';

interface InitialState {
  loading: boolean;
  lessons: Lessons.Lesson[] | null;
}

const initialState: InitialState = {
  lessons: null,
  loading: false,
};

export const lessonsReducer = createReducer(initialState, (builder) => {
  builder.addCase(getAllLessons.fulfilled, (state, action) => {
    state.lessons = action.payload.lessons;
  });
  builder.addCase(createLesson.fulfilled, (state, action) => {
    state.lessons?.push(action.payload.lesson);
  });
  builder.addMatcher(isPending(getAllLessons, createLesson), (state) => {
    state.loading = true;
  });
  builder.addMatcher(isRejected(getAllLessons, createLesson), (state) => {
    state.loading = false;
  });
  builder.addMatcher(isFulfilled(getAllLessons, createLesson), (state) => {
    state.loading = false;
  });
});
