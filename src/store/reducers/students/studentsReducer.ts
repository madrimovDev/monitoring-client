import {createReducer, isPending, isRejected} from '@reduxjs/toolkit';
import {getAllStudents} from './studentsActions';

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
  builder.addMatcher(isPending(getAllStudents), (state) => {
    state.loading = true;
  });
  builder.addMatcher(isRejected(getAllStudents), (state) => {
    state.loading = false;
  });
});
