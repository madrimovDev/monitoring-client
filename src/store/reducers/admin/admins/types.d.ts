declare namespace Admins {
  
  export interface AdminsResponse {
    message: string;
    admins: Admin[];

  }

  export interface AdminResponse {
    message: string;
    admin: Admin;
  }

  export interface Admin {
    id: number;
    userId: number;
    name: string;
    username: string;
    permissions: string[];
  }

  export interface CreateAdmin {
    name: string;
    username: string;
    password: string;
  }
  
}