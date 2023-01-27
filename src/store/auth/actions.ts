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
		return thunkAPI.rejectWithValue(e as Auth.Forbidden | Auth.Unauthorized)
	}
})

export const verify = createAsyncThunk('auth/login', async (_, thunkAPI) => {
	try {
		const result = await AuthService.verify()
		return result
	} catch (e) {
		return thunkAPI.rejectWithValue(e as Auth.Forbidden | Auth.Unauthorized)
	}
})
