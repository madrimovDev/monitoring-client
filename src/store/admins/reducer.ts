import { createReducer, isPending, isRejected } from '@reduxjs/toolkit'
import { Status } from '../types'
import { createAdmin, getAllAdmins } from './actions'

interface InitialState {
	admins: Admin.Admin[] | null
	status: Status
	message?: string
}

const initialState: InitialState = {
	admins: null,
	status: 'default'
}

const adminsReducer = createReducer(initialState, (builder) => {
	builder.addCase(getAllAdmins.fulfilled, (_, action) => {
		return {
			status: 'fulfilled',
			message: undefined,
			admins: action.payload
		}
	})
	builder.addCase(createAdmin.fulfilled, (state, action) => {
		state.status = 'fulfilled'
		state.message = action.payload.message
		state.admins?.push(action.payload.admin)
	})
	builder.addMatcher(isPending(getAllAdmins, createAdmin), (state) => {
		return {
			...state,
			status: 'pending'
		}
	})
	builder.addMatcher(isRejected(getAllAdmins, createAdmin), (state, action) => {
		return {
			...state,
			status: 'rejected',
			message: action.payload?.message
		}
	})
})

export default adminsReducer
