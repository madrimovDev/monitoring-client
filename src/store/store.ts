import { configureStore } from '@reduxjs/toolkit'
import userReducer from './auth/reducer'

const store = configureStore({
	reducer: {
		user: userReducer
	},
	devTools: !import.meta.env.PROD
})

export default store
