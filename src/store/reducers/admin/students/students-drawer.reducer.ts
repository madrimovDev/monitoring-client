import {createReducer} from '@reduxjs/toolkit';
import {closeStudentsDrawer, openStudentsDrawer, openStudentsDrawerWithData} from './students-drawer.action';

interface InitialState {
  open: boolean;
  type: 'create' | 'update' | 'def';
  data?: Students.Student;
}

const initialState: InitialState = {
  open: false,
  type: 'def',
};

export const studentsDrawerReducer = createReducer(initialState, (builder) => {
  builder.addCase(openStudentsDrawer, (state) => {
    state.open = true;
    state.type = 'create';
  });
  builder.addCase(openStudentsDrawerWithData, (state, action) => {
    state.open = true;
    state.type = 'update';
    state.data = action.payload;
  });
  builder.addCase(closeStudentsDrawer, () => initialState);
});
