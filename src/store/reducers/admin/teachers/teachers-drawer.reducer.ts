import {createReducer} from '@reduxjs/toolkit';
import {closeTeacherDrawer, openTeacherDrawer, openTeacherDrawerWithData} from './teachers-drawer.action';

interface InitialState {
  data?: Teachers.Teacher;
  open: boolean;
  type: 'create' | 'update' | 'def';
}

const initialState: InitialState = {
  open: false,
  type: 'def',
};

export const teachersDrawerReducer = createReducer(initialState, (builder) => {
  builder.addCase(openTeacherDrawer, (state) => {
    state.open = true;
    state.type = 'create';
  });
  builder.addCase(openTeacherDrawerWithData, (state, action) => {
    state.open = true;
    state.type = 'update';
    state.data = action.payload;
  });
  builder.addCase(closeTeacherDrawer, () => initialState);
});
