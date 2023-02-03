import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { InitialState } from '../types'

export const makeRejectFactory = <T extends InitialState<unknown>>(): CaseReducer<
	T,
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
