import { AxiosError } from 'axios'
import { useToast } from '@chakra-ui/react'
import { useQuery } from 'react-query'
import { adminApi, useAdmins } from '@/entities'

const useGetAdmins = () => {
	const { setAllAdmins } = useAdmins()
	
	const toast = useToast({
		position: 'top-right'
	})

	return useQuery('admins/get', {
		queryFn: async () => {
			const response = await adminApi.getAllAdmins()
			return response
		},
		onSuccess(data) {
			setAllAdmins(data.admins)
		},
		onError(error) {
			const e = error as AxiosError
			toast({
				status: 'error',
				title: e.response?.statusText,
				description: e.message
			})
		}
	})
}

export default useGetAdmins
