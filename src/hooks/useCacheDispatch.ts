import { useEffect } from 'react'
import { BoundAsyncThunk, useAppDispatch } from '@store'

type Time = {
	[key: string]: number
}

const timeCache: { time: Time } = {
	time: {}
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useCacheDispatch = (action: BoundAsyncThunk<any>, time: Time /* millisecunds */) => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (Object.keys(timeCache.time).length) {
			for (const key in time) {
				if (timeCache.time[key]) {
					if (timeCache.time[key] <= Date.now()) {
						dispatch(action())
						timeCache.time[key] = Date.now() + time[key]
					}
				} else {
					dispatch(action())
					timeCache.time[key] = time[key]
				}
			}
		} else {
			for (const key in time) {
				timeCache.time[key] = Date.now() + time[key]
				dispatch(action())
			}
		}
	}, [])
}

export default useCacheDispatch
