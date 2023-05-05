import {createReducer, isPending, isRejected} from '@reduxjs/toolkit';
import {createGroup, getAllGroups} from './groupsActions';

interface InitialState {
  loading: boolean;
  group: Groups.Group[] | null;
}

const initialState: InitialState = {
  loading: false,
  group: null,
};

export const groupsReducer = createReducer(initialState, (builder) => {
  builder.addCase(getAllGroups.fulfilled, (_, action) => {
    return {
      loading: false,
      group: action.payload.groups,
    };
  });
  builder.addCase(createGroup.fulfilled, (state, action) => {
    state.loading = false;
    state.group?.push(action.payload.group);
  });
  builder.addMatcher(isPending(getAllGroups, createGroup), (state) => {
    state.loading = true;
  });
  builder.addMatcher(isRejected(getAllGroups, createGroup), (state) => {
    state.loading = false;
  });
});
