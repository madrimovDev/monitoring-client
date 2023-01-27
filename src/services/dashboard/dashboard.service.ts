import api from '@api'

class DashboardService {
	static baseUrl = '/dashboard'
	static async getStatistics() {
		return await api.get<Dashboard.Response>(this.baseUrl)
	}
}

export default DashboardService
