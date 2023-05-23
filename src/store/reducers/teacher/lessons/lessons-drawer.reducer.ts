import {createReducer} from '@reduxjs/toolkit';
import {closeLessonsDrawer, openLessonsDrawer, openLessonsDrawerWithData} from '.';

interface InitialState {
  open: boolean;
  type: 'create' | 'update' | 'def';
  data?: Lessons.Lesson;
  date?: string;
}

const initialState: InitialState = {
  open: false,
  type: 'def',
};

export const lessonsDrawerReducer = createReducer(initialState, (builder) => {
  builder.addCase(openLessonsDrawer, (state, action) => {
    state.open = true;
    state.type = 'create';
    state.date = action.payload.date
  });
  builder.addCase(openLessonsDrawerWithData, (state, action) => {
    state.open = true;
    state.type = 'update';
    state.data = action.payload;
  });
  builder.addCase(closeLessonsDrawer, () => initialState);
});
