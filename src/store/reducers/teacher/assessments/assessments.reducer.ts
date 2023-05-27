import {createReducer, isFulfilled, isPending, isRejected} from '@reduxjs/toolkit';
import {getAllAssessments} from './assessments.action';

interface InitialState {
  loading: boolean;
  assessments: Assessments.StudentAssessment[] | null;
}

const initialState: InitialState = {
  assessments: null,
  loading: false,
};

export const assessmentsReducer = createReducer(initialState, (builder) => {
  builder.addCase(getAllAssessments.fulfilled, (state, action) => {
    state.assessments = action.payload.assessments;
  });
  builder.addMatcher(isPending(getAllAssessments), (state) => {
    state.loading = true;
  });
  builder.addMatcher(isRejected(getAllAssessments), (state) => {
    state.loading = false;
  });
  builder.addMatcher(isFulfilled(getAllAssessments), (state) => {
    state.loading = false;
  });
});
