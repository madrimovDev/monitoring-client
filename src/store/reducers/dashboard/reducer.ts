/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createReducer } from '@reduxjs/toolkit'
import { getStatistics } from './actions'
import { makePendingFactory } from '../../helpers/makePendingFactory'
import { InitialState } from '../../types'
import { makeRejectFactory } from '../../helpers/makeRejectFactory'

const initialState: InitialState<Dashboard.Statistics> = {
	data: null,
	status: 'default'
}

const dashboardReducer = createReducer(initialState, builder => {
	builder.addCase(getStatistics.fulfilled, (state, action) => {
		return {
			...state,
			status: 'fulfilled',
			data: action.payload
		}
	})
	builder.addCase(getStatistics.pending, makePendingFactory())
	builder.addCase(getStatistics.rejected, makeRejectFactory())
})

export default dashboardReducer
