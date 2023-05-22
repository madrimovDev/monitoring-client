import {createReducer, isFulfilled, isPending, isRejected} from '@reduxjs/toolkit';
import {getAllLessons} from './lessons.action';

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
  builder.addMatcher(isPending(getAllLessons), (state) => {
    state.loading = true;
  });
  builder.addMatcher(isRejected(getAllLessons), (state) => {
    state.loading = false;
  });
  builder.addMatcher(isFulfilled(getAllLessons), (state) => {
    state.loading = false;
  });
});
