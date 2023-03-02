declare namespace Dashboard {
	export interface DashboardResponse {
		message: string
		active: Active
		archive: Active
	}

	export interface Active {
		teachers: number
		students: number
		groups: number
		directions: never[]
	}
}
