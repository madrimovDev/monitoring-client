declare namespace Directions {
	export interface Direction {
		id: number
		name: string
		status: string
	}

	export interface NewDirection {
		name: string
	}

	export interface DirectionResponse {
		message: string
		direction: Direction
	}

	export interface DirectionsResponse {
		message: string
		directions: Direction[]
	}
}
