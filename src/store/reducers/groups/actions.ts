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

export const createGroup = createAsyncThunk<
	Groups.GroupResponse,
	Groups.NewGroup,
	{
		rejectValue: Auth.Forbidden
	}
>('groups/create', async (group, thunkApi) => {
	try {
		const result = await GroupsService.createGroup(group)
		return result.data
	} catch (e) {
		const error = e as AxiosError
		return thunkApi.rejectWithValue(error.response?.data as Auth.Forbidden)
	}
})

export const updateGroup = createAsyncThunk<
	Groups.GroupResponse,
	{
		id: number
		group: Groups.NewGroup
	},
	{
		rejectValue: Auth.Forbidden
	}
>('groups/update', async ({ group, id }, thunkApi) => {
	try {
		const result = await GroupsService.updateGroup(id, group)
		return result.data
	} catch (e) {
		const error = e as AxiosError
		return thunkApi.rejectWithValue(error.response?.data as Auth.Forbidden)
	}
})

export const deleteGroup = createAsyncThunk<
	Groups.GroupResponse,
	number,
	{
		rejectValue: Auth.Forbidden
	}
>('groups/delete', async (id, thunkApi) => {
	try {
		const result = await GroupsService.deleteGroup(id)
		return result.data
	} catch (e) {
		const error = e as AxiosError
		return thunkApi.rejectWithValue(error.response?.data as Auth.Forbidden)
	}
})
