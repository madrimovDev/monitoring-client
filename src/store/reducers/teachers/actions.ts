import { AxiosError } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { TeachersService } from '@services'

export const getAllTeachers = createAsyncThunk<
	Teachers.TeachersResponse,
	undefined,
	{
		rejectValue: Auth.Forbidden
	}
>('teachers/getAll', async (_, thunkApi) => {
	try {
		const result = await TeachersService.getAllTeachers()
		return result.data
	} catch (e) {
		const error = e as AxiosError
		return thunkApi.rejectWithValue(error.response?.data as Auth.Forbidden)
	}
})

export const createTeacher = createAsyncThunk<
	Teachers.TeacherResponse,
	Teachers.NewTeacher,
	{
		rejectValue: Auth.Forbidden
	}
>('teachers/create', async (teacher, thunkApi) => {
	try {
		const result = await TeachersService.createTeacher(teacher)
		return result.data
	} catch (e) {
		const error = e as AxiosError
		return thunkApi.rejectWithValue(error.response?.data as Auth.Forbidden)
	}
})

export const deleteTeacher = createAsyncThunk<
	Teachers.TeacherResponse,
	number,
	{
		rejectValue: Auth.Forbidden
	}
>('teachers/delete', async (id, thunkApi) => {
	try {
		const result = await TeachersService.deleteTeacher(id)
		return result.data
	} catch (e) {
		const error = e as AxiosError
		return thunkApi.rejectWithValue(error.response?.data as Auth.Forbidden)
	}
})

export const updateTeacher = createAsyncThunk<
	Teachers.TeacherResponse,
	{ id: number; teacher: Teachers.NewTeacher },
	{
		rejectValue: Auth.Forbidden
	}
>('teachers/update', async ({ id, teacher }, thunkApi) => {
	try {
		const result = await TeachersService.updateTeacher(id, teacher)
		return result.data
	} catch (e) {
		const error = e as AxiosError
		return thunkApi.rejectWithValue(error.response?.data as Auth.Forbidden)
	}
})
