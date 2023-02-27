import { api as base, makeBaseUrl } from '@/shared'

const api = {
	baseUrl: makeBaseUrl('admins'),
	async getAllAdmins() {
		const response = await base.get<Admins.AdminsResponse>(this.baseUrl)
		return response.data
	},
	async createAdmin(admin: Admins.NewAdmin) {
		const response = await base.post<{ admin: Admins.Admin; message: string }>(this.baseUrl, admin)
		return response.data
	},
	async updateAdmin(admin: Admins.NewAdmin, id: number) {
		const response = await base.put<{ admin: Admins.Admin; message: string }>(`${this.baseUrl}/${id}`, admin)
		return response.data
	}
}

export default api
