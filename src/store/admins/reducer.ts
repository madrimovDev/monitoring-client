import { InitialState } from './../types.d'
import { createReducer, isPending, isRejected, CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { createAdmin, deleteAdmin, getAllAdmins, updateAdmin } from './actions'

const initialState: InitialState<Admin.Admin[]> = {
	data: null,
	status: 'default'
}

export const makeRejectFactory = <T>(): CaseReducer<
	InitialState<T>,
	PayloadAction<Auth.Forbidden | Auth.Unauthorized | undefined>
> => {
	return (state, action) => {
		return {
			...state,
			status: 'rejected',
			message: action.payload?.message
		}
	}
}

const adminsReducer = createReducer(initialState, (builder) => {
	builder.addCase(getAllAdmins.fulfilled, (_, action) => {
		return {
			status: 'fulfilled',
			message: undefined,
			data: action.payload
		}
	})
	builder.addCase(createAdmin.fulfilled, (state, action) => {
		state.status = 'fulfilled'
		state.message = action.payload.message
		state.data?.push(action.payload.admin)
	})
	builder.addCase(deleteAdmin.fulfilled, (state, action) => {
		return {
			data: state.data?.filter((admin) => admin.id !== action.payload.admin.id) || state.data,
			status: 'fulfilled',
			message: action.payload.message
		}
	})
	builder.addCase(updateAdmin.fulfilled, (state, action) => {
		return {
			data:
				state.data?.map((admin) => {
					if (admin.id === action.payload.admin.id) {
						return action.payload.admin
					}
					return admin
				}) || state.data,
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
	builder.addMatcher(
		isRejected(getAllAdmins, createAdmin, deleteAdmin, updateAdmin),
		makeRejectFactory<Admin.Admin[]>()
	)
})

export default adminsReducer
