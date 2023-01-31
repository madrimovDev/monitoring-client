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
	static async deleteAdmin(id: number) {
		const response = await api.delete<Admin.NewAdminResponse>(this.baseUrl + '/' + id)
		return response
	}

	static async updateAdmin(id: number, data: Admin.UpdateAdmin) {
		const response = await api.put<Admin.NewAdminResponse>(`${this.baseUrl}/${id}`, data)
		return response
	}
}

export default AdminsService
