import { AxiosError } from 'axios'
import { useToast } from '@chakra-ui/react'
import { useQuery } from 'react-query'
import { useAdmins } from '@/entities'
import { api, sessionStorage } from '@/shared'

const useGetAdmins = () => {
	const orgId = sessionStorage.get('organizationId')
	const { setAllAdmins } = useAdmins()
	
	const toast = useToast({
		position: 'top-right'
	})

	return useQuery('admins/get', {
		queryFn: async () => {
			const response = await api.get<Admins.AdminsResponse>(`/organizations/${orgId}/admins`)
			return response.data
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
