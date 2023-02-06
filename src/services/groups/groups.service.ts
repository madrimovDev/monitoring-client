import api from '@api'
import { makeBaseUrl } from '@utils'
class GroupsService {
	static baseUrl = makeBaseUrl('groups')
	static async getAllGroups() {
		const response = await api.get<Groups.GroupsResponse>(this.baseUrl)
		return response
	}
}

export default GroupsService
