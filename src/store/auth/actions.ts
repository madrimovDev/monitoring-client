import { AxiosError } from 'axios'
import { AuthService } from '@services'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const login = createAsyncThunk<
	Auth.LoginResponse | undefined,
	Auth.LoginRequest,
	{ rejectValue: Auth.Forbidden | Auth.Unauthorized }
>('auth/login', async (req, thunkAPI) => {
	try {
		const result = await AuthService.login(req)
		return result
	} catch (e) {
		const error = e as AxiosError
		return thunkAPI.rejectWithValue(error.response?.data as Auth.Forbidden | Auth.Unauthorized)
	}
})

export const verify = createAsyncThunk<
	Auth.VerifyResponse | undefined,
	undefined,
	{
		rejectValue: Auth.Forbidden | Auth.Unauthorized
	}
>('auth/verify', async (_, thunkAPI) => {
	try {
		const result = await AuthService.verify()
		return result
	} catch (e) {
		const error = e as AxiosError
		return thunkAPI.rejectWithValue(error.response?.data as Auth.Forbidden | Auth.Unauthorized)
	}
})
