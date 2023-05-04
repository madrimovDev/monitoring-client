import {createReducer, isPending, isRejected} from '@reduxjs/toolkit';
import {createAdmin, getAllAdmins} from './adminsActions';

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
      admins: action.payload.admins,
    };
  });
  builder.addCase(createAdmin.fulfilled, (state, action) => {
    state.loading = false;
    state.admins?.push(action.payload.admin);
  });
  builder.addMatcher(isPending(getAllAdmins, createAdmin), (state) => {
    state.loading = true;
  });
  builder.addMatcher(isRejected(getAllAdmins, createAdmin), (state) => {
    state.loading = false;
  });
});
