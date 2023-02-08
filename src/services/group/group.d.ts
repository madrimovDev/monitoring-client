declare namespace Group {
	export interface Group {
		id: number
		name: string
		directionId: number
		organizationId: number
		months: number
		teacherId?: unknown
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
