declare namespace Group {
  export interface GroupResponse {
    message: string;
    groups: Group[];
  }

  export interface Group {
    id: number;
    name: string;
    months: number;
    direction: string;
    students: number;
  }
}
