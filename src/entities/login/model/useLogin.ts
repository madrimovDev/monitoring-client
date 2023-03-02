import { api, sessionStorage } from '@/shared'
import { useToast } from '@chakra-ui/react'
import { AxiosError, AxiosResponse } from 'axios'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'

const useLogin = () => {
	const toast = useToast()
	const navigate = useNavigate()
	return useMutation<AxiosResponse<User.User>, AxiosError, { username: string; password: string }, unknown>(
		'user/login',
		{
			mutationFn: data => {
				return api.post<User.User>('/auth/login', data)
			},
			onSuccess(data) {
				Object.keys(data.data).forEach(d => {
					console.log(data.data)
					
					sessionStorage.set(d, data.data[d as keyof User.User])
				})
				navigate('/', {
					replace: true
				})
			},
			onError(data) {
				toast({
					position: 'top-right',
					status: 'error',
					title: data.code,
					description: data.message,
					isClosable: true
				})
			}
		}
	)
}

export default useLogin
