import {createAction} from '@reduxjs/toolkit';

export const openGroupsDrawer = createAction('groupsDrawer/open');
export const openGroupsDrawerWithData = createAction<Groups.Group>('groupsDrawer/openWithData');
export const closeGroupsDrawer = createAction('groupsDrawer/close');
