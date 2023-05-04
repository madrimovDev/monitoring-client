declare namespace Directions {
  export interface DirectionsResponse {
    message: string;
    directions: Direction[];
  }

  export interface Direction {
    id: number;
    name: string;
    status: string;
  }
}