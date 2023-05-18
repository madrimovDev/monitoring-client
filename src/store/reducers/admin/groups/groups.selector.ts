import type {RootState} from '@/store/types';
import {createSelector} from '@reduxjs/toolkit';

type Groups = RootState['adminStore']['groups'];
type GroupsDrawer = RootState['adminStore']['groupsDrawer'];

export const selectGroups = (state: RootState): Groups => state.adminStore.groups;
export const selectGroupsDrawer = (state: RootState): GroupsDrawer => state.adminStore.groupsDrawer;
export const selectGroupById = createSelector(
  selectGroups,
  (_: RootState, groupId: number | string | undefined) => {
    return groupId;
  },
  (state, groupId) => {
    const group = state.group?.find((group) => group.id === +(groupId ?? ''));
    return group;
  },
);
