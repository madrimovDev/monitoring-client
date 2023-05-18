import {createReducer, isFulfilled, isPending, isRejected} from '@reduxjs/toolkit';
import {type Criteria} from './types';
import {createCriteria, getAllCriteria} from './criteria.action';

interface InitialState {
  loading: boolean;
  criterias: Criteria.Criteria[] | null;
}

const initialState: InitialState = {
  loading: false,
  criterias: null,
};

export const criteriaReducer = createReducer(initialState, (builder) => {
  builder.addCase(getAllCriteria.fulfilled, (state, action) => {
    state.criterias = action.payload.criterias;
  });
  builder.addCase(createCriteria.fulfilled, (state, action) => {
    state.criterias?.push(action.payload.criteria);
  });
  builder.addMatcher(isPending(getAllCriteria, createCriteria), (state) => {
    state.loading = true;
  });
  builder.addMatcher(isRejected(getAllCriteria, createCriteria), (state) => {
    state.loading = false;
  });
  builder.addMatcher(isFulfilled(getAllCriteria, createCriteria), (state) => {
    state.loading = false;
  });
});
