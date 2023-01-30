import { createReducer } from '@reduxjs/toolkit'
import { closeModal, createAdminModal } from './actions'

interface InitialState {
	adminModal: {
		open: boolean
		type: 'create' | 'update'
		data: { name: string; username: string } | null
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
