import { createReducer } from "@reduxjs/toolkit"
import { closeAssessmentModal, openAssessmentModal, openAssessmentModalWithData } from "."

interface InitialState  {
  open: boolean
  type: 'set' | 'update' | 'def'
  data?: Assessments.StudentAssessment
}

const initialState: InitialState = {
  open: false,
  type: 'def'
}

export const assessmentModalReducer = createReducer(initialState, builder => {
  builder.addCase(openAssessmentModal, (state) => {
    state.open = true
    state.type = 'set'
  })
  builder.addCase(openAssessmentModalWithData, (state, action) => {
    state.open = true;
    state.data = action.payload
    state.type = 'update'
  });
  builder.addCase(closeAssessmentModal, () => initialState);
})