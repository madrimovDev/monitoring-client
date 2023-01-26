import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
	reducer: {},
	devTools: !import.meta.env.PROD
})

export default store
