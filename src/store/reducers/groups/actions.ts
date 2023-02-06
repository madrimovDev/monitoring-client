import { AxiosError } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { GroupsService } from '@services'

export const getAllGroups = createAsyncThunk<
	Groups.GroupsResponse,
	undefined,
	{
		rejectValue: Auth.Forbidden
	}
>('groups/getAll', async (_, thunkApi) => {
	try {
		const result = await GroupsService.getAllGroups()
		return result.data
	} catch (e) {
		const error = e as AxiosError
		return thunkApi.rejectWithValue(error.response?.data as Auth.Forbidden)
	}
})
