import { AxiosError } from 'axios'
import { statisticsWithoutMessage } from './../mapper/statisticsWithoutMessage'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { DashboardService } from '@services'

export const getStatistics = createAsyncThunk<Dashboard.Statistics, undefined, { rejectValue: Auth.Forbidden }>(
	'dashboard/get',
	async (_, thunkApi) => {
		try {
			const result = await DashboardService.getStatistics()
			return statisticsWithoutMessage(result.data)
		} catch (e) {
			const error = e as AxiosError
			return thunkApi.rejectWithValue(error.response?.data as Auth.Forbidden)
		}
	}
)
