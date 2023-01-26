import { useMemo } from 'react'
import { ActionCreatorsMapObject, AsyncThunk, bindActionCreators } from '@reduxjs/toolkit'
import useAppDispatch from './useAppDispatch'

type BoundActions<Actions extends ActionCreatorsMapObject> = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key in keyof Actions]: Actions[key] extends AsyncThunk<any, any, any> ? BoundAsyncThunk<Actions[key]> : Actions[key]
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type BoundAsyncThunk<Thunk extends AsyncThunk<any, any, any>> = (
	...args: Parameters<Thunk>
) => ReturnType<ReturnType<Thunk>>

const useActionCreator = <Actions extends ActionCreatorsMapObject>(actions: Actions): BoundActions<Actions> => {
	const dispatch = useAppDispatch()
	return useMemo(() => bindActionCreators(actions, dispatch), [])
}

export default useActionCreator
