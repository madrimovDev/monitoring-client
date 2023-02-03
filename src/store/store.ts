import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/auth/reducer'
import dashboardReducer from './reducers/dashboard/reducer'
import adminsReducer from './reducers/admins/reducer'
import modalsReducer from './reducers/modals/reducer'
import directionsReducer from './reducers/directions/reducer'
import teachersReducer from './reducers/teachers/reducer'

const store = configureStore({
	reducer: {
		user: userReducer,
		dashboard: dashboardReducer,
		admins: adminsReducer,
		modals: modalsReducer,
		directions: directionsReducer,
		teachers: teachersReducer
	},
	devTools: !import.meta.env.PROD
})

export default store
