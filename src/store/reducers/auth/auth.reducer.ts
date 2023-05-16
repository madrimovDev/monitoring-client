import {createReducer, isPending, isRejected} from '@reduxjs/toolkit';
import {login} from './auth.action';

interface InitialState {
  loading: boolean;
  user: Auth.User | null;
}

const initialState: InitialState = {
  loading: false,
  user: null,
};

export const authReducer = createReducer(initialState, (builder) => {
  builder.addCase(login.fulfilled, (_, action) => {
    return {
      loading: false,
      user: action.payload,
    };
  });
  builder.addMatcher(isPending(login), (state) => {
    state.loading = true;
  });
  builder.addMatcher(isRejected(login), (state) => {
    state.loading = false;
    state.user = null;
  });
});
