import { makeBaseUrl } from '@utils'
import api from '@api'

class DashboardService {
	static baseUrl = makeBaseUrl('dashboard')
	static async getStatistics() {
		return await api.get<Dashboard.Response>(this.baseUrl)
	}
}

export default DashboardService
