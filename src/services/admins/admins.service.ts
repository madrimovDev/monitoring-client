import api from '@api'

class AdminsService {
	static baseUrl = '/admins'
	static async getAllAdmins() {
		const response = await api.get<Admin.AdminResponse>(this.baseUrl)
		return response
	}
	static async createAdmin(newAdmin: Admin.NewAdmin) {
		const response = await api.post<Admin.NewAdminResponse>(this.baseUrl, {
			...newAdmin,
			permissions: ['admin']
		})

		return response
	}
}

export default AdminsService
