import { AxiosError } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AdminsService } from '@services'

export const getAllAdmins = createAsyncThunk<
	Admin.Admin[],
	undefined,
	{
		rejectValue: Auth.Forbidden
	}
>('admins/getAll', async (_, thunkApi) => {
	try {
		const result = await AdminsService.getAllAdmins()
		return result.data.admins
	} catch (e) {
		const error = e as AxiosError
		return thunkApi.rejectWithValue(error.response?.data as Auth.Forbidden)
	}
})

export const createAdmin = createAsyncThunk<
	Admin.NewAdminResponse,
	Admin.NewAdmin,
	{
		rejectValue: Auth.Forbidden
	}
>('admins/create', async (newAdmin, thunkApi) => {
	try {
		const result = await AdminsService.createAdmin(newAdmin)
		return result.data
	} catch (e) {
		const error = e as AxiosError
		return thunkApi.rejectWithValue(error.response?.data as Auth.Forbidden)
	}
})
