import {createReducer, isPending, isRejected} from '@reduxjs/toolkit';
import {createTeacher, deleteTeacher, getAllTeachers, updateTeacher} from './teachersAction';

interface InitialState {
  loading: boolean;
  teachers: Teachers.Teacher[] | null;
}

const initialState: InitialState = {
  loading: false,
  teachers: null,
};

export const teachersReducer = createReducer(initialState, (builder) => {
  builder.addCase(getAllTeachers.fulfilled, (state, action) => {
    state.loading = false;
    state.teachers = action.payload.teachers;
  });
  builder.addCase(createTeacher.fulfilled, (state, action) => {
    state.loading = false;
    state.teachers?.push(action.payload.teacher);
  });
  builder.addCase(updateTeacher.fulfilled, (state, action) => {
    state.loading = false;
    state.teachers =
      state.teachers?.map((teacher) => {
        if (teacher.id === action.payload.teacher.id) {
          return action.payload.teacher;
        }
        return teacher;
      }) ?? state.teachers;
  });
  builder.addCase(deleteTeacher.fulfilled, (state, action) => {
    state.loading = false;
    state.teachers = state.teachers?.filter((teacher) => teacher.id !== action.payload.teacher.id) ?? state.teachers;
  });
  builder.addMatcher(isPending(getAllTeachers, createTeacher, updateTeacher, deleteTeacher), (state) => {
    state.loading = true;
  });
  builder.addMatcher(isRejected(getAllTeachers, createTeacher, updateTeacher, deleteTeacher), (state) => {
    state.loading = false;
  });
});
