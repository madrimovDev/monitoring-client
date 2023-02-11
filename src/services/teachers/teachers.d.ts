declare namespace Teachers {
	export interface Teacher {
		id: number
		userId: number
		username: string
		name: string
		surname: string
		phone: string
		groups: Groups.Group[]
		students: number
		directions: Directions.Direction[]
		permissions: string[]
	}

	export interface Group {
		id: number
		name: string
		months: number
		direction: string
		students: number
	}

	export interface TeacherGroupsResponse {
		message: string
		groups: Group[]
	}

	export interface NewTeacher {
		username: string
		name: string
		password?: string
		surname: string
		phone: string
		directions: number[]
	}

	export interface TeacherResponse {
		message: string
		teacher: Teacher
	}

	export interface TeachersResponse {
		message: string
		teachers: Teacher[]
	}
}
