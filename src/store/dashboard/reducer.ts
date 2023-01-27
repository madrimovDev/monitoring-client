import { getStatistics } from './actions'
import { Status } from './../types.d'
import { createReducer } from '@reduxjs/toolkit'

interface InitialState {
	status: Status
	statistics: Dashboard.Statistics | null
	message?: string
}

const initialState: InitialState = {
	statistics: null,
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
			statistics: action.payload
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
