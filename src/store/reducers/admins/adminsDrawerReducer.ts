import {createReducer} from '@reduxjs/toolkit';
import {
  closeAdminDrawer,
  openAdminDrawer,
  openAdminDrawerWithData,
} from './adminsDrawerActions';

interface InitialState {
  open: boolean;
  data?: Admins.Admin;
  type: 'create' | 'update' | 'def';
}

const initialState: InitialState = {
  type: 'def',
  open: false,
};

export const adminsDrawerReducer = createReducer(initialState, (builder) => {
  builder.addCase(openAdminDrawer, () => {
    return {
      open: true,
      type: 'create',
    };
  });
  builder.addCase(openAdminDrawerWithData, (_, action) => {
    return {
      open: true,
      type: 'update',
      data: action.payload.data,
    };
  });
  builder.addCase(closeAdminDrawer, () => {
    return {
      open: false,
      type: 'def',
      data: undefined,
    };
  });
});
