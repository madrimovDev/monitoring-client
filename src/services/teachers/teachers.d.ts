declare namespace Teachers {
	export interface Teacher {
		id: number
		userId: number
		username: string
		name: string
		surname: string
		phone: string
		groups: unknown[]
		directions: Directions.Direction[]
		permissions: string[]
	}

	// export interface TeacherRequest {
		
	// }

	export interface TeachersResponse {
		message: string
		teachers: Teacher[]
	}
}
