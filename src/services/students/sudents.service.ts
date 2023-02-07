import api from '@api'
import { makeBaseUrl } from '@utils'
class StudentsService {
	static baseUrl = makeBaseUrl('students')

	static async getAllStudents() {
		const response = await api.get<Students.StudentsResponse>(this.baseUrl)
		return response
	}
	static async createStudent(student: Students.NewStudent) {
		const response = await api.post<Students.StudentResponse>(this.baseUrl, student)
		return response
	}

	static async updateStudent(id: number, student: Students.NewStudent) {
		const response = await api.put<Students.StudentResponse>(`${this.baseUrl}/${id}`, student)
		return response
	}
	static async deleteStudent(id: number) {
		const response = await api.delete<Students.StudentResponse>(`${this.baseUrl}/${id}`)
		return response
	}
}

export default StudentsService
