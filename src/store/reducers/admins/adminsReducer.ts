import {createReducer, isPending, isRejected} from '@reduxjs/toolkit';
import { getAllAdmins } from './adminsActions';

interface InitialState {
  loading: boolean;
  admins: Admins.Admin[] | null;
}

const initialState: InitialState = {
  loading: false,
  admins: null,
};

export const adminsReducers = createReducer(initialState, (builder) => {
  builder.addCase(getAllAdmins.fulfilled, (_, action) => {
    return {
      loading: false,
      admins: action.payload.admins
    }
  })
  builder.addMatcher(isPending(getAllAdmins), (state) => {
    state.loading = true;
  });
  builder.addMatcher(isRejected(getAllAdmins), (state) => {
    state.loading = false;
  });
});
