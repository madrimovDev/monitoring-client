import { api } from '@/shared'
import { useQuery } from 'react-query'

const useDashboard = () => {
	const orgId = window.localStorage.getItem('organizationId')

	return useQuery('dashboard/get', {
		queryFn: async () => {
			const response = await api.get<Dashboard.DashboardResponse>(`/organizations/${orgId}/dashboard`)
			return response.data
		}
	})
}

export default useDashboard
