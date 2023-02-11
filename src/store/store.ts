import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/auth/reducer'
import dashboardReducer from './reducers/dashboard/reducer'
import adminsReducer from './reducers/admins/reducer'
import modalsReducer from './reducers/modals/reducer'
import directionsReducer from './reducers/directions/reducer'
import teachersReducer from './reducers/teachers/reducer'
import groupsReducer from './reducers/groups/reducer'
import studentsReducer from './reducers/students/reducer'

const adminReducers = combineReducers({
	dashboard: dashboardReducer,
	admins: adminsReducer,
	modals: modalsReducer,
	directions: directionsReducer,
	teachers: teachersReducer,
	groups: groupsReducer,
	students: studentsReducer
})

const store = configureStore({
	reducer: {
		user: userReducer,
		admin: adminReducers
	},
	devTools: true
})

export default store
