declare namespace Teachers {
	export interface Teacher {
		id: number
		userId: number
		username: string
		name: string
		surname: string
		phone: string
		groups: Groups.Group[]
		directions: Directions.Direction[]
		permissions: string[]
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
