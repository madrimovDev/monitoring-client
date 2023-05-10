declare namespace Directions {
  export interface DirectionsResponse {
    message: string;
    directions: Direction[];
  }
  export interface DirectionResponse {
    message: string;
    direction: Direction;
  }
  export interface Direction {
    id: number;
    name: string;
    status: string;
  }
  export interface DirectionDetailsResponse {
    message: string;
    direction: DirectionDetails;
  }

  export interface DirectionDetails {
    id: number;
    name: string;
    organizationId: number;
    status: string;
    groups: Group[];
    teachers: Teacher[];
  }

  export interface Group {
    id: number;
    name: string;
    months: number;
    teacher: Teacher | null;
    _count: Count;
  }

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

}
