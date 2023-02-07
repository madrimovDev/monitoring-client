import { createReducer, isPending, isRejected } from '@reduxjs/toolkit'
import { getAllGroups, createGroup, deleteGroup, updateGroup } from './actions'
import { InitialState } from './../../types.d'
import { makePendingFactory } from '../../helpers/makePendingFactory'
import { makeRejectFactory } from './../../helpers/makeRejectFactory'

const initialState: InitialState<Groups.Group[]> = {
	status: 'default',
	data: null
}

const groupsReducer = createReducer(initialState, builder => {
	builder.addCase(getAllGroups.fulfilled, (_, action) => {
		return {
			status: 'fulfilled',
			data: action.payload.groups
		}
	})
	builder.addCase(createGroup.fulfilled, (state, action) => {
		return {
			...state,
			status: 'fulfilled',
			data: state.data ? [...state.data, action.payload.group] : state.data
		}
	})
	builder.addCase(updateGroup.fulfilled, (state, action) => {
		return {
			status: 'fulfilled',
			data:
				state.data?.map(group => (group.id === action.payload.group.id ? action.payload.group : group)) || state.data,
			message: action.payload.message
		}
	})
	builder.addCase(deleteGroup.fulfilled, (state, action) => {
		return {
			status: 'fulfilled',
			data: state.data?.filter(group => group.id !== action.payload.group.id) || state.data,
			message: action.payload.message
		}
	})
	builder.addMatcher(isPending(getAllGroups, createGroup, updateGroup, deleteGroup), makePendingFactory())
	builder.addMatcher(isRejected(getAllGroups, createGroup, updateGroup, deleteGroup), makeRejectFactory())
})

export default groupsReducer
