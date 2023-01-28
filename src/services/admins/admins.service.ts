import api from '@api'

class AdminsService {
	static baseUrl = '/admins'
	static async getAllAdmins() {
		const response = await api.get<Admin.AdminResponse>(this.baseUrl)
		return response
	}
}

export default AdminsService
