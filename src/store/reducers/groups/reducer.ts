import { getAllGroups } from './actions'
import { InitialState } from './../../types.d'
import { createReducer, isPending, isRejected } from '@reduxjs/toolkit'

const initialState: InitialState<Groups.Group[]> = {
	status: 'default',
	data: null
}

const groupsReducer = createReducer(initialState, builder => {
	builder.addCase(getAllGroups.fulfilled, (state, action) => {
		return {
			status: 'fulfilled',
			data: action.payload.groups
		}
	})
	builder.addMatcher(isPending(getAllGroups), state => {
		return {
			...state,
			status: 'pending'
		}
	})
	builder.addMatcher(isRejected(getAllGroups), (state, action) => {
		return {
			...state,
			status: 'rejected',
			message: action.payload?.message
		}
	})
})

export default groupsReducer
