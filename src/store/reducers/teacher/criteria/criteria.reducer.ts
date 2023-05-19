import {createReducer, isFulfilled, isPending, isRejected} from '@reduxjs/toolkit';
import {type Criteria} from './types';
import {createCriteria, deleteCriteria, getAllCriteria, updateCriteria} from './criteria.action';

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
  builder.addCase(updateCriteria.fulfilled, (state, action) => {
    state.criterias =
      state.criterias?.map((criteria) =>
        criteria.id === action.payload.criteria.id ? action.payload.criteria : criteria,
      ) ?? state.criterias;
  });
  builder.addCase(deleteCriteria.fulfilled, (state, action) => {
    state.criterias =
      state.criterias?.filter((criteria) => criteria.id !== action.payload.criteria.id) ?? state.criterias;
  });
  builder.addMatcher(isPending(getAllCriteria, createCriteria, deleteCriteria, updateCriteria), (state) => {
    state.loading = true;
  });
  builder.addMatcher(isRejected(getAllCriteria, createCriteria, deleteCriteria, updateCriteria), (state) => {
    state.loading = false;
  });
  builder.addMatcher(isFulfilled(getAllCriteria, createCriteria, deleteCriteria, updateCriteria), (state) => {
    state.loading = false;
  });
});
