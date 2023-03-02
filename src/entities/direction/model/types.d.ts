declare namespace Direction{
	export interface Teacher {
			id: number;
			userId: number;
			name: string;
			surname: string;
			phone: string;
			status: string;
	}
	
	export interface Count {
			students: number;
	}

	export interface Group {
			id: number;
			name: string;
			months: number;
			teacher: Teacher;
			_count: Count;
	}


	export interface Direction {
			id: number;
			name: string;
			organizationId: number;
			status: string;
			groups: Group[];
			teachers: Teacher[];
	}

	export interface DirectionResponse {
			message: string;
			direction: Direction;
	}

}

