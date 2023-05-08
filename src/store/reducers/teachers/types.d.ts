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
}

/** 
  export interface Root {
    message: string
    teacher: Teacher
  }

  export interface Teacher {
    id: number
    userId: number
    username: string
    name: string
    surname: string
    phone: string
    groups: any[]
    directions: Direction[]
    permissions: string[]
  }

  export interface Direction {
    id: number
    name: string
    organizationId: number
    status: string
  }
 */