declare namespace Dashboard {
	export interface Direction {
		id: number
		name: string
		groups: number
		students: number
		teachers: never[]
	}

	export interface Response {
		message: string
		groups: number
		teachers: number
		students: number
		directions: Direction[]
	}

	export interface Statistics {
		groups: number
		teachers: number
		students: number
		directions: Direction[]
	}
}
