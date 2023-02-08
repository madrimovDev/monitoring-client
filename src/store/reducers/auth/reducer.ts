import { createReducer, isPending, isRejected, isFulfilled } from '@reduxjs/toolkit'
import { userWithoutToken } from '../../mapper/userWithoutToken'
import { login, logout, verify } from './actions'
import { InitialState } from '../../types'
import { makeRejectFactory } from '../../helpers/makeRejectFactory'
import { makePendingFactory } from '../../helpers/makePendingFactory'

const initialState: InitialState<Auth.VerifyResponse> = {
	status: 'default',
	data: null
}

const userReducer = createReducer(initialState, builder => {
	builder.addCase(logout, () => {
		window.localStorage.clear()

		return {
			message: 'Logout',
			status: 'default',
			data: null
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
	builder.addMatcher(isPending(login, verify), makePendingFactory())
	builder.addMatcher(isRejected(login, verify), makeRejectFactory())
})

export default userReducer
