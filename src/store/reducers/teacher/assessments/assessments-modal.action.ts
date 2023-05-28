import { createAction } from "@reduxjs/toolkit";

export const openAssessmentModal = createAction('assessmentDrawer/open')
export const openAssessmentModalWithData = createAction<Assessments.StudentAssessment>('assessmentDrawer/openWithData');
export const closeAssessmentModal = createAction('assessmentDrawer/close');