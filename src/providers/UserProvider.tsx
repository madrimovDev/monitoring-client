import { AuthService } from '@services'
import { AxiosError } from 'axios'
import React, { ReactNode } from 'react'
import { useMutation } from 'react-query'
import { userContext } from '@contexts'

const { Provider } = userContext

interface Props {
	children: ReactNode
}

const UserProvider = ({ children }: Props) => {
	const loginMutate = useMutation<Auth.User, AxiosError, { username: string; password: string }>(
		async ({ password, username }) => {
			return AuthService.login(username, password)
		},
		{
			mutationKey: 'auth/login'
		}
	)

	return (
		<Provider
			value={{
				loginMutate
			}}>
			{children}
		</Provider>
	)
}

export default UserProvider
