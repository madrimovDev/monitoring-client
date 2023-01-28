import { configureStore } from '@reduxjs/toolkit'
import userReducer from './auth/reducer'
import dashboardReducer from './dashboard/reducer'
import adminsReducer from './admins/reducer'

const store = configureStore({
	reducer: {
		user: userReducer,
		dashboard: dashboardReducer,
		admins: adminsReducer
	},
	devTools: !import.meta.env.PROD
})

export default store
