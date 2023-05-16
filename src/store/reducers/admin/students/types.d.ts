declare namespace Students {
  export interface StudentsResponse {
    message: string;
    students: Student[];
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

  export interface NewStudent {
    username: string;
    password: string;
    name: string;
    surname: string;
    phone: string;
    birthday: Date;
  }
  
  export interface StudentResponse {
    message: string;
    student: Student;
  }
}
