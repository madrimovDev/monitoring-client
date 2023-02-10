declare namespace Students {
	export interface Group {
		id: number
		name: string
		status: 'deleted' | 'active'
	}

	export interface Student {
		id: number
		userId: number
		username: string
		name: string
		surname: string
		birthday: Date
		phone: string
		groups: Group[]
		permissions: string[]
	}

	export interface NewStudent {
		username: string
		password?: string
		name: string
		surname: string
		birthday: string
		phone: string
	}

	export interface StudentResponse {
		message: string
		student: Student
	}

	export interface StudentsResponse {
		message: string
		students: Student[]
	}
}
