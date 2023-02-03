import { createReducer, isPending, isRejected } from '@reduxjs/toolkit'

import { makeRejectFactory } from './../../helpers/makeRejectFactory'
import { makePendingFactory } from '../../helpers/makePendingFactory'
import { InitialState } from '../../types'
import { createTeacher, deleteTeacher, getAllTeachers } from './actions'

const initialState: InitialState<Teachers.Teacher[]> = {
	status: 'default',
	data: null
}

const teachersReducer = createReducer(initialState, builder => {
	builder.addCase(getAllTeachers.fulfilled, (_, action) => ({
		status: 'fulfilled',
		data: action.payload.teachers
	}))
	builder.addCase(createTeacher.fulfilled, (state, action) => {
		return {
			message: action.payload.message,
			status: 'fulfilled',
			data: state.data ? [...state.data, action.payload.teacher] : state.data
		}
	})
	builder.addCase(deleteTeacher.fulfilled, (state, action) => {
		return {
			message: action.payload.message,
			status: 'fulfilled',
			data: state.data?.filter(teacher => teacher.id !== action.payload.teacher.id) || state.data
		}
	})
	builder.addMatcher(isPending(getAllTeachers, createTeacher, deleteTeacher), makePendingFactory())
	builder.addMatcher(isRejected(getAllTeachers, createTeacher, deleteTeacher), makeRejectFactory())
})

export default teachersReducer
