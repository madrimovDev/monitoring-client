declare namespace Auth {
  export interface User {
    userId: number;
    username: string;
    permissions: string[];
    organizationId: number;
    token: string;
  }  
  export interface LoginRequest {
    username: string
    passport: string
  }
}
