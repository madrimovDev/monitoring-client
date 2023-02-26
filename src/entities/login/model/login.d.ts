declare namespace User {
	export interface User {
		userId: number
		organizationId: number
		token: string
		permissions: string[]
		username: string
		role: 'admin' | 'teacher' | 'student' | 'supervisor'
	}
}
