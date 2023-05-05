import {createReducer, isPending, isRejected} from '@reduxjs/toolkit';
import {
  createDirection,
  deleteDirection,
  getAllDirections,
  updateDirection,
} from './directionsActions';

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
  builder.addCase(updateDirection.fulfilled, (state, action) => {
    return {
      loading: false,
      directions:
        state.directions?.map((dir) =>
          dir.id === action.payload.direction.id
            ? action.payload.direction
            : dir,
        ) ?? [],
    };
  });
  builder.addCase(createDirection.fulfilled, (state, action) => {
    state.loading = false;
    state.directions?.push(action.payload.direction);
  });
  builder.addCase(deleteDirection.fulfilled, (state, action) => {
    return {
      loading: false,
      directions:
        state.directions?.filter(
          (dir) => dir.id !== action.payload.direction.id,
        ) ?? [],
    };
  });
  builder.addMatcher(
    isPending(
      getAllDirections,
      createDirection,
      updateDirection,
      deleteDirection,
    ),
    (state) => {
      state.loading = true;
    },
  );
  builder.addMatcher(
    isRejected(
      getAllDirections,
      createDirection,
      updateDirection,
      deleteDirection,
    ),
    (state) => {
      state.loading = false;
    },
  );
});
