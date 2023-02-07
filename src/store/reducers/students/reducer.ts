import { InitialState } from './../../types.d'
import { createReducer, isPending, isRejected } from '@reduxjs/toolkit'
import { getAllStudents, updateStudent, createStudent, deleteStudent } from './actions'
import { makeRejectFactory } from '../../helpers/makeRejectFactory'
import { makePendingFactory } from '../../helpers/makePendingFactory'

const initialState: InitialState<Students.Student[]> = {
	data: null,
	status: 'default'
}

const studentsReducer = createReducer(initialState, builder => {
	builder.addCase(getAllStudents.fulfilled, (state, action) => {
		return {
			...state,
			status: 'fulfilled',
			data: action.payload.students
		}
	})
	builder.addCase(createStudent.fulfilled, (state, action) => {
		return {
			status: 'fulfilled',
			data: state.data ? [...state.data, action.payload.student] : state.data,
			message: action.payload.message
		}
	})
	builder.addCase(updateStudent.fulfilled, (state, action) => {
		return {
			status: 'fulfilled',
			data:
				state.data?.map(student => (student.id === action.payload.student.id ? action.payload.student : student)) ||
				state.data,
			message: action.payload.message
		}
	})
	builder.addCase(deleteStudent.fulfilled, (state, action) => {
		return {
			status: 'fulfilled',
			data: state.data?.filter(student => student.id !== action.payload.student.id) || state.data,
			message: action.payload.message
		}
	})
	builder.addMatcher(isPending(getAllStudents, updateStudent, createStudent, deleteStudent), makePendingFactory())
	builder.addMatcher(isRejected(getAllStudents, updateStudent, createStudent, deleteStudent), makeRejectFactory())
})

export default studentsReducer
