import store from './store'

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

type Status = 'pending' | 'fulfilled' | 'rejected' | 'default'

export interface InitialState<T> {
	status: Status
	data: T | null
	message?: string
}
