import {createReducer} from '@reduxjs/toolkit';
import type {Criteria} from './types';
import {closeCriteriaDrawer, openCriteriaDrawer, openCriteriaDrawerWithData} from '.';

interface InitialState {
  open: boolean;
  data?: Criteria.Criteria;
  type: 'create' | 'update' | 'def';
}

const initialState: InitialState = {
  open: false,
  type: 'def',
};

export const criteriaDrawerReducer = createReducer(initialState, (builder) => {
  builder.addCase(openCriteriaDrawer, (state) => {
    state.open = true;
    state.type = 'create';
  });
  builder.addCase(openCriteriaDrawerWithData, (state, action) => {
    state.open = true;
    state.type = 'update';
    state.data = action.payload;
  });
  builder.addCase(closeCriteriaDrawer, () => initialState);
});
