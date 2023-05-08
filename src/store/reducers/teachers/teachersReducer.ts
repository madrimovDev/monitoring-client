import {createReducer, isPending, isRejected} from '@reduxjs/toolkit';
import {getAllTeachers} from './teachersAction';

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
  builder.addMatcher(isPending(getAllTeachers), (state) => {
    state.loading = true;
  });
  builder.addMatcher(isRejected(getAllTeachers), (state) => {
    state.loading = false;
  });
});
