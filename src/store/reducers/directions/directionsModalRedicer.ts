import { createReducer } from '@reduxjs/toolkit'
import { openDirectionModal, openDirectionModalWithData } from '.'

interface InitialState {
  open: boolean
  data?: string
  type: 'create' | 'update' | 'def'
}

const initialState: InitialState = {
  open: false,
  type: 'def'
}

const directionsModalReducer = createReducer(initialState, builder => {
  builder.addCase(openDirectionModal, state => {
    state.open = true
  })
  builder.addCase(openDirectionModalWithData, (state, actions) => {
    state.open = true
    state.data = actions.payload.data
  })
})