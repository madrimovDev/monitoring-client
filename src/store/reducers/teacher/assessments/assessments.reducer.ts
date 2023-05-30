import {createReducer, isFulfilled, isPending, isRejected} from '@reduxjs/toolkit';
import {getAllAssessments, setAssessments} from './assessments.action';

interface InitialState {
  loading: boolean;
  assessments: Assessments.StudentAssessment[];
}

const initialState: InitialState = {
  assessments: [],
  loading: false,
};

export const assessmentsReducer = createReducer(initialState, (builder) => {
  builder.addCase(getAllAssessments.fulfilled, (state, action) => {
    state.assessments = action.payload.assessments;
  });
  builder.addMatcher(isPending(getAllAssessments, setAssessments), (state) => {
    state.loading = true;
  });
  builder.addMatcher(isRejected(getAllAssessments, setAssessments), (state) => {
    state.loading = false;
  });
  builder.addMatcher(isFulfilled(getAllAssessments, setAssessments), (state) => {
    state.loading = false;
  });
});
