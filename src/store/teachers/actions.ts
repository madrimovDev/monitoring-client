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
