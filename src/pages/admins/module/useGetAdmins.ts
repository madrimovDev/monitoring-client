import { api, sessionStorage } from '@/shared'
import { useQuery } from 'react-query'
const useGetAdmins = () => {
	const orgId = sessionStorage.get('organizationId')
	return useQuery('admins/get', {
		queryFn: async () => {
			const response = await api.get<Admins.AdminsResponse>(`/organizations/${orgId}/admins`)
			return response.data
		}
	})
}
export default useGetAdmins
