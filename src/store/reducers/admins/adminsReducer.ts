import {createReducer, isPending, isRejected} from '@reduxjs/toolkit';

interface InitialState {
  loading: boolean;
  admins: Admins.Admin[] | null;
}

const initialState: InitialState = {
  loading: false,
  admins: null,
};

export const adminsReducers = createReducer(initialState, (builder) => {
  builder.addMatcher(isPending(), (state) => {
    state.loading = true;
  });
  builder.addMatcher(isRejected(), (state) => {
    state.loading = false;
  });
});
