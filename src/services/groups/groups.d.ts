declare namespace Groups {
	export interface Group {
		id: number
		name: string
		direction: {
			id: number
			name: string
		}
		students: number
	}
}
