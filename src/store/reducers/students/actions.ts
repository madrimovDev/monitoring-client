import { AxiosError } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { StudentsService } from '@services'

export const getAllStudents = createAsyncThunk<
	Students.StudentsResponse,
	undefined,
	{
		rejectValue: Auth.Forbidden
	}
>('students/getAll', async (_, thunkApi) => {
	try {
		const result = await StudentsService.getAllStudents()
		return result.data
	} catch (e) {
		const error = e as AxiosError
		return thunkApi.rejectWithValue(error.response?.data as Auth.Forbidden)
	}
})

export const createStudent = createAsyncThunk<
	Students.StudentResponse,
	Students.NewStudent,
	{
		rejectValue: Auth.Forbidden
	}
>('students/create', async (student, thunkApi) => {
	try {
		const result = await StudentsService.createStudent(student)
		return result.data
	} catch (e) {
		const error = e as AxiosError
		return thunkApi.rejectWithValue(error.response?.data as Auth.Forbidden)
	}
})

export const updateStudent = createAsyncThunk<
	Students.StudentResponse,
	{
		id: number
		student: Students.NewStudent
	},
	{
		rejectValue: Auth.Forbidden
	}
>('students/update', async ({ id, student }, thunkApi) => {
	try {
		const result = await StudentsService.updateStudent(id, student)
		return result.data
	} catch (e) {
		const error = e as AxiosError
		return thunkApi.rejectWithValue(error.response?.data as Auth.Forbidden)
	}
})

export const deleteStudent = createAsyncThunk<
	Students.StudentResponse,
	number,
	{
		rejectValue: Auth.Forbidden
	}
>('students/delete', async (id, thunkApi) => {
	try {
		const result = await StudentsService.deleteStudent(id)
		return result.data
	} catch (e) {
		const error = e as AxiosError
		return thunkApi.rejectWithValue(error.response?.data as Auth.Forbidden)
	}
})
