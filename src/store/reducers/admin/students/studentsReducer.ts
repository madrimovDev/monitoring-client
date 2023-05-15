import {createReducer, isPending, isRejected} from '@reduxjs/toolkit';
import {createStudent, getAllStudents} from './studentsActions';

interface InitialState {
  loading: boolean;
  students: Students.Student[] | null;
}

const initialState: InitialState = {
  loading: false,
  students: null,
};

export const studentsReducer = createReducer(initialState, (builder) => {
  builder.addCase(getAllStudents.fulfilled, (state, action) => {
    state.loading = false;
    state.students = action.payload.students;
  });
  builder.addCase(createStudent.fulfilled, (state, action) => {
    state.loading = false;
    state.students?.push(action.payload.student);
  });
  builder.addMatcher(isPending(getAllStudents, createStudent), (state) => {
    state.loading = true;
  });
  builder.addMatcher(isRejected(getAllStudents, createStudent), (state) => {
    state.loading = false;
  });
});
