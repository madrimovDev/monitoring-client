declare namespace Admin {
	export interface Admin {
		id: number
		userId: number
		name: string
		username: string
		permissions: string[]
	}

	export interface AdminResponse {
		message: string
		admins: Admin[]
	}
}
