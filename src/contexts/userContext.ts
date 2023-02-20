import { AxiosError } from 'axios'
import { createContext } from 'react'
import { UseMutationResult } from 'react-query'

export interface UserContext {
	loginMutate: UseMutationResult<Auth.User, AxiosError, { username: string; password: string }, unknown>
}

const userContext = createContext<UserContext>({} as UserContext)

export default userContext
