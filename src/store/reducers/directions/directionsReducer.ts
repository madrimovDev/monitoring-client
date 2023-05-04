import {createReducer, isPending, isRejected} from '@reduxjs/toolkit';
import {getAllDirections} from './directionsActions';

interface InitialState {
  loading: boolean;
  directions: Directions.Direction[] | null;
}

const initialState: InitialState = {
  loading: false,
  directions: null,
};

export const directionsReducer = createReducer(initialState, (builder) => {
  builder.addCase(getAllDirections.fulfilled, (_, action) => {
    return {
      loading: false,
      directions: action.payload.directions,
    };
  });
  builder.addMatcher(isPending(getAllDirections), (state) => {
    state.loading = true;
  });
  builder.addMatcher(isRejected(getAllDirections), (state) => {
    state.loading = false;
    state.directions = null;
  });
});
