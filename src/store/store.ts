import { configureStore } from '@reduxjs/toolkit'
import userReducer from './auth/reducer'
import dashboardReducer from './dashboard/reducer'
import adminsReducer from './admins/reducer'
import modalsReducer from './modals/reducer'
import directionsReducer from './directions/reducer'

const store = configureStore({
	reducer: {
		user: userReducer,
		dashboard: dashboardReducer,
		admins: adminsReducer,
		modals: modalsReducer,
		directions: directionsReducer
	},
	devTools: !import.meta.env.PROD
})

export default store
