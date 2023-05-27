import {createReducer, isFulfilled, isPending, isRejected} from '@reduxjs/toolkit';
import {getGroupStudents} from './group-students.action';

interface InitialState {
  loading: boolean;
  students: Students.Student[] | null;
}

const initialState: InitialState = {
  loading: false,
  students: null,
};

export const groupStudentsReducer = createReducer(initialState, (builder) => {
  builder.addMatcher(isPending(getGroupStudents), (state) => {
    state.loading = true;
  });
  builder.addMatcher(isRejected(getGroupStudents), (state) => {
    state.loading = false;
  });
  builder.addMatcher(isFulfilled(getGroupStudents), (state, action) => {
    state.loading = false;
    state.students = action.payload.students;
  });
});
