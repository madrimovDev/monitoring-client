import api from '@api'

class TeachersService {
	static baseUrl = '/teachers'

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
}

export default TeachersService
