import { createReducer, isPending, isRejected } from '@reduxjs/toolkit'
import { Status } from '../types'
import { createAdmin, deleteAdmin, getAllAdmins, updateAdmin } from './actions'

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
	builder.addCase(deleteAdmin.fulfilled, (state, action) => {
		return {
			admins: state.admins?.filter((admin) => admin.id !== action.payload.admin.id) || [],
			status: 'fulfilled',
			message: action.payload.message
		}
	})
	builder.addCase(updateAdmin.fulfilled, (state, action) => {
		return {
			admins:
				state.admins?.map((admin) => {
					if (admin.id === action.payload.admin.id) {
						return action.payload.admin
					}
					return admin
				}) || [],
			status: 'fulfilled',
			message: action.payload.message
		}
	})
	builder.addMatcher(isPending(getAllAdmins, createAdmin, deleteAdmin, updateAdmin), (state) => {
		return {
			...state,
			status: 'pending'
		}
	})
	builder.addMatcher(isRejected(getAllAdmins, createAdmin, deleteAdmin, updateAdmin), (state, action) => {
		return {
			...state,
			status: 'rejected',
			message: action.payload?.message
		}
	})
})

export default adminsReducer
