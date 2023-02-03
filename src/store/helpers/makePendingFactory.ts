import { CaseReducer } from '@reduxjs/toolkit'
import { InitialState } from '../types'

export const makePendingFactory = <T extends InitialState<unknown>>(): CaseReducer<T> => {
	return state => {
		return { ...state, status: 'pending' }
	}
}
