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

	static async getLessonAssessments(groupId: string | undefined, lessonId: string | undefined) {
		const response = await api.get<Group.AssessmentsResponse>(
			this.baseUrl + '/' + groupId + '/lessons/' + lessonId + '/assessments'
		)
		return response
	}
	static async setLessonAssessments(
		groupId: string | undefined,
		lessonId: string | undefined,
		data: {
			id: number
			score: number | string
			comment: string
		}
	) {
		const response = await api.patch<Group.AssessmentsResponse>(
			this.baseUrl + '/' + groupId + '/lessons/' + lessonId + '/assessments/' + data.id,
			{
				score: +data.score,
				comment: data.comment
			}
		)
		return response
	}

	static async getLessonAttechments(groupId: string | undefined, lessonId: string | undefined) {
		const response = await api.get<Group.AttechmentsResponse>(
			this.baseUrl + '/' + groupId + '/lessons/' + lessonId + '/attachments'
		)
		return response
	}
}

export default GroupService
