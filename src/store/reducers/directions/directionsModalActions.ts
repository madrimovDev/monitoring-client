import {createAction} from '@reduxjs/toolkit';

interface OpenDirectionModalWithData {
  data: string;
}

export const openDirectionModal = createAction('directionModal/open');
export const openDirectionModalWithData =
  createAction<OpenDirectionModalWithData>('directionModal/openWithData');
export const closeDirectionModal = createAction<OpenDirectionModalWithData>(
  'directionModal/close',
);
