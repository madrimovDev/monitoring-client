import {createReducer} from '@reduxjs/toolkit';
import {
  closeDirectionModal,
  openDirectionModal,
  openDirectionModalWithData,
} from '.';

interface InitialState {
  open: boolean;
  data?: Directions.Direction;
  type: 'create' | 'update' | 'def';
}

const initialState: InitialState = {
  open: false,
  type: 'def',
};

export const directionsModalReducer = createReducer(initialState, (builder) => {
  builder.addCase(openDirectionModal, (state) => {
    state.open = true;
    state.type = 'create';
  });
  builder.addCase(openDirectionModalWithData, (state, actions) => {
    state.open = true;
    state.type = 'update';
    state.data = actions.payload.data;
  });
  builder.addCase(closeDirectionModal, () => {
    return initialState;
  });
});
