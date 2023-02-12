import { makeBaseUrl } from '@utils'
import api from '@api'

class TeachersService {
	static baseUrl = makeBaseUrl('teachers')

	static async getAllTeachers() {
		const response = await api.get<Teachers.TeachersResponse>(this.baseUrl)
		return response
	}

	static async createTeacher(teacher: Teachers.NewTeacher) {
		const response = await api.post<Teachers.TeacherResponse>(this.baseUrl, teacher)
		return response
	}

	static async deleteTeacher(id: number) {
		const response = await api.delete<Teachers.TeacherResponse>(`${this.baseUrl}/${id}`)
		return response
	}

	static async updateTeacher(id: number, teacher: Teachers.NewTeacher) {
		const response = await api.put<Teachers.TeacherResponse>(`${this.baseUrl}/${id}`, teacher)
		return response
	}

	static async getTeacherGroup(teacherId: number) {
		const response = await api.get<Teachers.TeacherGroupsResponse>(`${this.baseUrl}/${1}/groups`)
		return response
	}
}

export default TeachersService
