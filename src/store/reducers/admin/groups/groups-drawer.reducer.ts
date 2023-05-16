import {createReducer} from '@reduxjs/toolkit';
import {closeGroupsDrawer, openGroupsDrawer, openGroupsDrawerWithData} from './groups-drawer.action';

interface InitialState {
  open: boolean;
  type: 'create' | 'update' | 'def';
  data?: Groups.Group;
}

const initialState: InitialState = {
  open: false,
  type: 'def',
};

export const groupsDrawerReducer = createReducer(initialState, (builder) => {
  builder.addCase(openGroupsDrawer, () => {
    return {
      open: true,
      type: 'create',
    };
  });
  builder.addCase(openGroupsDrawerWithData, (_, action) => {
    return {
      open: true,
      type: 'update',
      data: action.payload,
    };
  });
  builder.addCase(closeGroupsDrawer, () => initialState);
});
