declare namespace Student {
  export interface StudentResponse {
    message: string;
    student: Student;
  }

  export interface Student {
    id: number;
    userId: number;
    username: string;
    name: string;
    surname: string;
    phone: string;
    groups: Group[];
    permissions: string[];
  }

  export interface Group {
    id: number;
    name: string;
    status: string;
    direction: Direction;
  }

  export interface Direction {
    id: number;
    name: string;
    organizationId: number;
    status: string;
  }

}