import { makePendingFactory } from '../../helpers/makePendingFactory'
import { InitialState } from '../../types'
import { createReducer, isPending } from '@reduxjs/toolkit'
import { getAllTeachers } from './actions'

const initialState: InitialState<Teachers.Teacher[]> = {
	status: 'default',
	data: null
}

const teachersReducer = createReducer(initialState, builder => {
	builder.addCase(getAllTeachers.fulfilled, (_, action) => ({
		status: 'fulfilled',
		data: action.payload.teachers
	}))
	builder.addMatcher(isPending(getAllTeachers), makePendingFactory())
})

export default teachersReducer
