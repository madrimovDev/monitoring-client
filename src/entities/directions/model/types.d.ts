declare namespace Directions {
	export interface Direction {
		id: number
		name: string
		status: string
	}

	export interface DirectionsResponse {
		message: string
		directions: Direction[]
	}
}
