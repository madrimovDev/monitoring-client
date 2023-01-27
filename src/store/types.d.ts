import store from './store'

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export type Status = 'pending' | 'fulfilled' | 'rejected' | 'default'