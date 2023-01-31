import { AxiosError } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { DirectionService } from '@services'

export const getAllDirections = createAsyncThunk<
	Directions.DirectionsResponse,
	undefined,
	{
		rejectValue: Auth.Forbidden
	}
>('directions/getAll', async (_, thunkApi) => {
	try {
		const result = await DirectionService.getDirections()
		return result.data
	} catch (e) {
		const error = e as AxiosError
		return thunkApi.rejectWithValue(error.response?.data as Auth.Forbidden)
	}
})

export const updateDirection = createAsyncThunk<
	Directions.DirectionResponse,
	{
		id: string | number
		direction: Directions.NewDirection
	},
	{
		rejectValue: Auth.Forbidden
	}
>('directions/update', async (data, thunkApi) => {
	try {
		const result = await DirectionService.updateDirection(data.direction, data.id)
		return result.data
	} catch (e) {
		const error = e as AxiosError
		return thunkApi.rejectWithValue(error.response?.data as Auth.Forbidden)
	}
})

export const deleteDirection = createAsyncThunk<
	Directions.DirectionResponse,
	number | string,
	{
		rejectValue: Auth.Forbidden
	}
>('directions/delete', async (id, thunkApi) => {
	try {
		const result = await DirectionService.deleteDirection(id)
		return result.data
	} catch (e) {
		const error = e as AxiosError
		return thunkApi.rejectWithValue(error.response?.data as Auth.Forbidden)
	}
})

export const createDirection = createAsyncThunk<
	Directions.DirectionResponse,
	Directions.NewDirection,
	{
		rejectValue: Auth.Forbidden
	}
>('directions/creaete', async (direction, thunkApi) => {
	try {
		const result = await DirectionService.createDirection(direction)
		return result.data
	} catch (e) {
		const error = e as AxiosError
		return thunkApi.rejectWithValue(error.response?.data as Auth.Forbidden)
	}
})
