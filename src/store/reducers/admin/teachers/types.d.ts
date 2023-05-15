declare namespace Teachers {
  export interface TeachersResponse {
    message: string;
    teachers: Teacher[];
  }

  export interface Teacher {
    id: number;
    userId: number;
    username: string;
    name: string;
    surname: string;
    phone: string;
    groups: Group[];
    directions: Direction[];
    permissions: string[];
  }

  export interface Group {
    id: number;
    name: string;
    direction: Direction;
    students: number;
  }

  export interface Direction {
    id: number;
    name: string;
  }

  export interface NewTeacher {
    username: string;
    password: string;
    name: string;
    surname: string;
    phone: string;
    directions: number[];
  }

  export interface TeacherResponse {
    message: string
    teacher: Teacher
  }
}