declare namespace Admins {
	export interface Admin {
		id: number
		userId: number
		name: string
		username: string
		permissions: string[]
	}

	export interface AdminsResponse {
		message: string
		admins: Admin[]
	}
}
