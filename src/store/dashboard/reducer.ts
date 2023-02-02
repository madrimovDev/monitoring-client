import { getStatistics } from './actions'
import { InitialState } from './../types.d'
import { createReducer } from '@reduxjs/toolkit'

const initialState: InitialState<Dashboard.Statistics> = {
	data: null,
	status: 'default'
}

const dashboardReducer = createReducer(initialState, (builder) => {
	builder.addCase(getStatistics.pending, (state) => {
		return {
			...state,
			status: 'pending'
		}
	})
	builder.addCase(getStatistics.fulfilled, (state, action) => {
		return {
			...state,
			status: 'fulfilled',
			data: action.payload
		}
	})
	builder.addCase(getStatistics.rejected, (state, action) => {
		return {
			...state,
			status: 'rejected',
			message: action.payload?.message
		}
	})
})

export default dashboardReducer
