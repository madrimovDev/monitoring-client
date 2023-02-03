import { createReducer } from '@reduxjs/toolkit'
import {
	closeModal,
	createAdminModal,
	createDirectionModal,
	createTeacherModal,
	updateAdminModal,
	updateDirectionModal,
	updateTeacherModal
} from './actions'

interface InitialState {
	adminModal: {
		open: boolean
		type: 'create' | 'update'
		data: Admin.Admin | null
	}
	directionModal: {
		open: boolean
		type: 'create' | 'update'
		data: Directions.Direction | null
	}
	teacherModal: {
		open: boolean
		type: 'create' | 'update'
		data: Teachers.Teacher | null
	}
}

const initialState: InitialState = {
	teacherModal: {
		open: false,
		type: 'create',
		data: null
	},
	adminModal: {
		open: false,
		type: 'create',
		data: null
	},
	directionModal: {
		open: false,
		type: 'create',
		data: null
	}
}

const modalsReducer = createReducer(initialState, builder => {
	builder.addCase(createAdminModal, state => {
		return {
			...state,
			adminModal: {
				open: true,
				data: null,
				type: 'create'
			}
		}
	})
	builder.addCase(updateAdminModal, (state, action) => {
		return {
			...state,
			adminModal: {
				open: true,
				data: action.payload,
				type: 'update'
			}
		}
	})
	builder.addCase(createDirectionModal, state => {
		return {
			...state,
			directionModal: {
				open: true,
				data: null,
				type: 'create'
			}
		}
	})
	builder.addCase(updateDirectionModal, (state, action) => {
		return {
			...state,
			directionModal: {
				open: true,
				data: action.payload,
				type: 'update'
			}
		}
	})
	builder.addCase(createTeacherModal, state => {
		return {
			...state,
			teacherModal: {
				open: true,
				data: null,
				type: 'create'
			}
		}
	})
	builder.addCase(updateTeacherModal, (state, action) => {
		return {
			...state,
			teacherModal: {
				open: true,
				data: action.payload,
				type: 'update'
			}
		}
	})
	builder.addCase(closeModal, () => {
		return {
			teacherModal: {
				data: null,
				open: false,
				type: 'create'
			},
			directionModal: {
				data: null,
				open: false,
				type: 'create'
			},
			adminModal: {
				open: false,
				data: null,
				type: 'create'
			}
		}
	})
})

export default modalsReducer
