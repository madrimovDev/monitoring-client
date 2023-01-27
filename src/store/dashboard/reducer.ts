import { Status } from './../types.d'
import { createReducer } from '@reduxjs/toolkit'

interface InitialState {
	status: Status,
	statistics: Dashboard.Statistics | null
	message?: string
}

const initialState: InitialState = {
	statistics: null,
	status: 'default'
}

const dashboardReducer = createReducer(initialState, (builder) => {
	builder.addCase()
})

export default dashboardReducer
