declare namespace Groups {
  export interface GroupsResponse {
    message: string;
    groups: Group[];
  }

  export interface CreatedGroupResponse {
    message: string;
    group: GroupWithoutTeacherAndStatus;
  }

  export interface GroupResponse {
    message: string;
    group: Group;
  }

  export interface NewGroup {
    name: string;
    months: number;
    directionId: number;
  }

  export interface Group {
    id: number;
    name: string;
    months: number;
    direction: Direction;
    teacher: Teacher | null;
    status: string;
  }

  export interface GroupWithoutTeacherAndStatus {
    id: number;
    name: string;
    months: number;
    direction: Direction;
  }

  export interface Direction {
    id: number;
    name: string;
    status: string;
  }

  export interface Teacher {
    id: number;
    name: string;
    surname: string;
    status: string;
  }
}
