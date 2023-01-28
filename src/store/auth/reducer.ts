import { createReducer, isPending, isRejected, isFulfilled } from '@reduxjs/toolkit'
import { userWithoutToken } from './../mapper/userWithoutToken'
import { Status } from '../types'
import { login, logout, verify } from './actions'

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
	builder.addCase(logout, () => {
		window.localStorage.clear()
		return {
			message: 'Logout',
			user: null,
			status: 'default'
		}
	})
	builder.addMatcher(isFulfilled(login, verify), (state, action) => {
		if (action.payload) {
			return {
				...state,
				status: 'fulfilled',
				user: userWithoutToken(action.payload)
			}
		}
	})
	builder.addMatcher(isPending(login, verify), (state) => {
		return {
			...state,
			status: 'pending'
		}
	})
	builder.addMatcher(isRejected(login, verify), (state, action) => {
		return {
			...state,
			status: 'rejected',
			message: action.payload?.message
		}
	})
})

export default userReducer
