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
		students: number
		teacher?: Teachers.Teacher
		status: string
	}

	export interface NewGroup {
		name: string
		months: number
		directionId: number
	}

	export interface GroupResponse {
		message: string
		group: Group
	}

	export interface GroupsResponse {
		message: string
		groups: Group[]
	}
}
