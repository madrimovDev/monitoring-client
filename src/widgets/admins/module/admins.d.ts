declare namespace Admins {
	export interface AdminsResponse {
		message: string;
		admins: Admin[];
	}
	
	export interface Admin {
		id: number;
		userId: number;
		name: string;
		username: string;
		permissions: string[];
	}
}