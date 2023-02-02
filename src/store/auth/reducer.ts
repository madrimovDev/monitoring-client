import { createReducer, isPending, isRejected, isFulfilled } from '@reduxjs/toolkit'
import { userWithoutToken } from './../mapper/userWithoutToken'
import { login, logout, verify } from './actions'
import { InitialState } from '../types'
import { makeRejectFactory } from '../admins/reducer'

const initialState: InitialState<Auth.VerifyResponse> = {
	status: 'default',
	data: null
}

const userReducer = createReducer(initialState, (builder) => {
	builder.addCase(logout, () => {
		window.localStorage.clear()
		return {
			message: 'Logout',
			data: null,
			status: 'default'
		}
	})
	builder.addMatcher(isFulfilled(login, verify), (state, action) => {
		if (action.payload) {
			return {
				...state,
				status: 'fulfilled',
				data: userWithoutToken(action.payload)
			}
		}
	})
	builder.addMatcher(isPending(login, verify), (state) => {
		return {
			...state,
			status: 'pending'
		}
	})
	builder.addMatcher(isRejected(login, verify), makeRejectFactory<Auth.VerifyResponse>())
})

export default userReducer
