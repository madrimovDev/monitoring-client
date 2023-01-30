import { createReducer } from '@reduxjs/toolkit'
import { closeModal, createAdminModal, updateAdminModal } from './actions'

interface InitialState {
	adminModal: {
		open: boolean
		type: 'create' | 'update'
		data: Admin.Admin | null
	}
}

const initialState: InitialState = {
	adminModal: {
		open: false,
		type: 'create',
		data: null
	}
}

const modalsReducer = createReducer(initialState, (builder) => {
	builder.addCase(createAdminModal, () => {
		return {
			adminModal: {
				open: true,
				data: null,
				type: 'create'
			}
		}
	})
	builder.addCase(updateAdminModal, (state, action) => {
		return {
			adminModal: {
				open: true,
				data: action.payload,
				type: 'update'
			}
		}
	})
	builder.addCase(closeModal, () => {
		return {
			adminModal: {
				open: false,
				data: null,
				type: 'create'
			}
		}
	})
})

export default modalsReducer
