import { createReducer, isPending, isRejected } from '@reduxjs/toolkit'
import { createDirection, deleteDirection, getAllDirections, updateDirection } from './actions'
import { InitialState } from '../../types'
import { makeRejectFactory } from '../../helpers/makeRejectFactory'
import { makePendingFactory } from '../../helpers/makePendingFactory'

const initialState: InitialState<Directions.Direction[]> = {
	status: 'default',
	data: null
}

const directionsReducer = createReducer(initialState, builder => {
	builder.addCase(getAllDirections.fulfilled, (_, action) => {
		return {
			status: 'fulfilled',
			data: action.payload.directions
		}
	})
	builder.addCase(updateDirection.fulfilled, (state, action) => {
		return {
			status: 'fulfilled',
			message: action.payload.message,
			data:
				state.data?.map(direction =>
					direction.id === action.payload.direction.id ? action.payload.direction : direction
				) || []
		}
	})
	builder.addCase(createDirection.fulfilled, (state, action) => {
		return {
			status: 'fulfilled',
			message: action.payload.message,
			data: state.data ? [...state.data, action.payload.direction] : [action.payload.direction]
		}
	})
	builder.addCase(deleteDirection.fulfilled, (state, action) => {
		return {
			status: 'fulfilled',
			message: action.payload.message,
			data: state.data?.filter(direction => direction.id !== action.payload.direction.id) || []
		}
	})
	builder.addMatcher(
		isPending(getAllDirections, createDirection, updateDirection, deleteDirection),
		makePendingFactory()
	)
	builder.addMatcher(
		isRejected(getAllDirections, createDirection, updateDirection, deleteDirection),
		makeRejectFactory()
	)
})

export default directionsReducer
