import { createReducer, isPending, isRejected } from '@reduxjs/toolkit'
import { Status } from '../types'
import { getAllAdmins } from './actions'

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
	builder.addCase(getAllAdmins.fulfilled, (state, action) => {
		return {
			status: 'fulfilled',
			message: undefined,
			admins: action.payload
		}
	})
	builder.addMatcher(isPending(getAllAdmins), (state) => {
		return {
			...state,
			status: 'pending'
		}
	})
	builder.addMatcher(isRejected(getAllAdmins), (state, action) => {
		return {
			...state,
			status: 'rejected',
			message: action.payload?.message
		}
	})
})

export default adminsReducer
