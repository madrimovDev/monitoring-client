import api from '@api'
import { makeBaseUrl } from '@utils'
class GroupService {
	static baseUrl = makeBaseUrl('groups')
	static async getGroup(id: string | undefined) {
		const response = await api.get<Group.GroupResponse>(this.baseUrl + '/' + id)
		return response.data
	}
	static async getGroupStudets(id: string | undefined) {
		const response = await api.get<Group.StudentsResponse>(this.baseUrl + '/' + id + '/students')
		return response.data
	}

	static async getGroupTeacher(id: string | undefined) {
		const response = await api.get<Group.TeacherResponse>(this.baseUrl + '/' + id + '/teacher')
		return response.data
	}

	static async getGroupLessons(id: string | undefined) {
		const response = await api.get<Group.LessonsResponse>(this.baseUrl + '/' + id + '/lessons')
		return response.data
	}
}

export default GroupService
