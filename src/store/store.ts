import { configureStore } from '@reduxjs/toolkit'
import userReducer from './auth/reducer'
import dashboardReducer from './dashboard/reducer'

const store = configureStore({
	reducer: {
		user: userReducer,
		dashboard: dashboardReducer
	},
	devTools: !import.meta.env.PROD
})

export default store
