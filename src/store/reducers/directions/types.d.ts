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
}
