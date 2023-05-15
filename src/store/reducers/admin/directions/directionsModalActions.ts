import {createAction} from '@reduxjs/toolkit';

interface OpenDirectionModalWithData {
  data: Directions.Direction;
}

export const openDirectionModal = createAction('directionModal/open');
export const openDirectionModalWithData =
  createAction<OpenDirectionModalWithData>('directionModal/openWithData');
export const closeDirectionModal = createAction('directionModal/close');
