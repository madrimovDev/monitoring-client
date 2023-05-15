import {createReducer, isPending, isRejected} from '@reduxjs/toolkit';
import {createGroup, deleteGroup, getAllGroups, updateGroup} from './groupsActions';

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
  builder.addCase(updateGroup.fulfilled, (state, action) => {
    state.loading = false;
    state.group =
      state.group?.map((group) => {
        if (group.id === action.payload.group.id) {
          return action.payload.group;
        }
        return group;
      }) ?? state.group;
  });
  builder.addCase(deleteGroup.fulfilled, (state, action) => {
    state.loading = false;
    state.group = state.group?.filter((group) => group.id !== action.payload.group.id) ?? state.group;
  });
  builder.addMatcher(isPending(getAllGroups, createGroup, deleteGroup), (state) => {
    state.loading = true;
  });
  builder.addMatcher(isRejected(getAllGroups, createGroup, deleteGroup), (state) => {
    state.loading = false;
  });
});
