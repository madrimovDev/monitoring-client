import api from '@api'

class TeachersService {
	static baseUrl = '/teachers'

	static async getAllTeachers() {
		const response = api.get<Teachers.TeachersResponse>(this.baseUrl)
		return response
	}
}

export default TeachersService
