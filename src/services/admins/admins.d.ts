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

	export interface NewAdmin {
		username: string
		name: string
		password: string
	}

	export interface NewAdminResponse {
		message: string
		admin: Admin
	}

	export interface UpdateAdmin {
		username?: string
		password?: string
		name?: string
	}
}
