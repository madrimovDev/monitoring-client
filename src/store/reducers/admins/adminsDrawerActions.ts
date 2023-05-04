import {createAction} from '@reduxjs/toolkit';

interface OpenAdminDrawerPayload {
  data: Admins.Admin;
}

export const openAdminDrawer = createAction('adminDrawer/open');
export const openAdminDrawerWithData = createAction<OpenAdminDrawerPayload>(
  'adminDrawer/openWithData',
);
export const closeAdminDrawer = createAction('adminDrawer/close')
