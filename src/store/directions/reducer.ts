import { createReducer, isPending, isRejected } from '@reduxjs/toolkit'
import { Status } from '../types'
import { createDirection, deleteDirection, getAllDirections, updateDirection } from './actions'

interface InitialState {
	status: Status
	message?: string
	directions: Directions.Direction[] | null
}

const initialState: InitialState = {
	status: 'default',
	directions: null
}

const directionsReducer = createReducer(initialState, (builder) => {
	builder.addCase(getAllDirections.fulfilled, (_, action) => {
		return {
			status: 'fulfilled',
			directions: action.payload.directions
		}
	})
	builder.addCase(updateDirection.fulfilled, (state, action) => {
		return {
			status: 'fulfilled',
			message: action.payload.message,
			directions:
				state.directions?.map((direction) =>
					direction.id === action.payload.direction.id ? action.payload.direction : direction
				) || []
		}
	})
	builder.addCase(createDirection.fulfilled, (state, action) => {
		return {
			status: 'fulfilled',
			message: action.payload.message,
			directions: state.directions ? [...state.directions, action.payload.direction] : [action.payload.direction]
		}
	})
	builder.addCase(deleteDirection.fulfilled, (state, action) => {
		return {
			status: 'fulfilled',
			message: action.payload.message,
			directions: state.directions?.filter((direction) => direction.id !== action.payload.direction.id) || []
		}
	})
	builder.addMatcher(isPending(getAllDirections, createDirection, updateDirection, deleteDirection), (state) => {
		return {
			...state,
			status: 'pending'
		}
	})
	builder.addMatcher(
		isRejected(getAllDirections, createDirection, updateDirection, deleteDirection),
		(state, action) => {
			return {
				...state,
				status: 'rejected',
				message: action.payload?.message
			}
		}
	)
})

export default directionsReducer
