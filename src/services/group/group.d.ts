declare namespace Group {
	export interface Group {
		id: number
		name: string
		direction: {
			id: number
			name: string
			status: string
		}
		organizationId: number
		months: number
		teacher: {
			id: number
			name: string
			surname: string
			status: string
		}
		status: string
	}

	export interface Student {
		id: number
		userId: number
		name: string
		surname: string
		birthday: Date
		phone: string
		status: string
	}

	export interface Teacher {
		id: number
		userId: number
		name: string
		surname: string
		phone: string
		status: string
	}

	export interface Criteria {
		id: number
		maximum: number
		organizationId: number
		status: string
	}

	export interface Lesson {
		id: number
		date: Date
		title: string
		type: string
		criteria: Criteria
	}

	export interface Assessment {
		score: number
		comment: string
		studentId: number
	}

	export interface AssessmentStudent {
		id: number
		name: string
		assessment: Assessment
	}

	export interface AssessmentsResponse {
		message: string
		assessments: AssessmentStudent[]
	}

	export interface LessonsResponse {
		message: string
		lessons: Lesson[]
	}

	export interface TeacherResponse {
		message: string
		teacher: Teacher
	}

	export interface StudentsResponse {
		message: string
		students: Student[]
	}

	export interface GroupResponse {
		message: string
		group: Group
	}
}
