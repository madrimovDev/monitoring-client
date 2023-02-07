import api from '@api'
import { makeBaseUrl } from '@utils'
class GroupsService {
	static baseUrl = makeBaseUrl('groups')
	static async getAllGroups() {
		const response = await api.get<Groups.GroupsResponse>(this.baseUrl)
		return response
	}
	static async createGroup(group: Groups.NewGroup) {
		const response = await api.post<Groups.GroupResponse>(this.baseUrl, group)
		return response
	}
	static async deleteGroup(id: number) {
		const response = await api.delete<Groups.GroupResponse>(`${this.baseUrl}/${id}`)
		return response
	}
	static async updateGroup(id: number, group: Groups.NewGroup) {
		const response = await api.put<Groups.GroupResponse>(`${this.baseUrl}/${id}`, group)
		return response
	}
}

export default GroupsService
