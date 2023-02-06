declare namespace Groups {
	export interface Direction {
		id: number
		name: string
	}

	export interface Group {
		id: number
		name: string
		months: number
		direction: Direction
		teacher?: Teachers.Teacher
		status: string
	}

	export interface GroupsResponse {
		message: string
		groups: Group[]
	}
}
