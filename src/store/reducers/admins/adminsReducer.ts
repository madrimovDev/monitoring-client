import {createReducer, isPending, isRejected} from '@reduxjs/toolkit';
import {createAdmin, getAllAdmins, updateAdmin} from './adminsActions';

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
  builder.addCase(updateAdmin.fulfilled, (state, action) => {
    state.loading = false;
    state.admins =
      state.admins?.map((admin) =>
        admin.id === action.payload.admin.id ? action.payload.admin : admin,
      ) ?? [];
  });
  builder.addMatcher(
    isPending(getAllAdmins, createAdmin, updateAdmin),
    (state) => {
      state.loading = true;
    },
  );
  builder.addMatcher(
    isRejected(getAllAdmins, createAdmin, updateAdmin),
    (state) => {
      state.loading = false;
    },
  );
});
