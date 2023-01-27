import { createReducer, isPending, isRejected } from '@reduxjs/toolkit'
import { userWithoutToken } from './../mapper/userWithoutToken'
import { Status } from '../types'
import { login, verify } from './actions'

interface InitialState {
	status: Status
	user: Auth.VerifyResponse | null
	message?: string
}

const initialState: InitialState = {
	status: 'default',
	user: null
}

const userReducer = createReducer(initialState, (builder) => {
	builder.addCase(login.fulfilled, (state, action) => {
		return {
			...state,
			status: 'fulfilled',
			user: userWithoutToken(action.payload)
		}
	})
	builder.addCase(verify.fulfilled, (state, action) => {
		if (action.payload) {
			return {
				...state,
				status: 'fulfilled',
				user: action.payload
			}
		}
	})
	builder.addMatcher(isPending(login), (state) => {
		return {
			...state,
			status: 'pending'
		}
	})
	builder.addMatcher(isRejected(login), (state, action) => {
		return {
			...state,
			status: 'rejected',
			message: action.payload?.message
		}
	})
})

export default userReducer
