declare namespace Auth {
	export interface LoginResponse {
		userId: number
		username: string
		permissions: string[]
		token: string
	}
	export interface LoginRequest {
		username: string
		password: string
	}
	export interface VerifyResponse {
		userId: number
		username: string
		permissions: string[]
	}

	export interface Unauthorized {
		message: string
	}
	export interface Forbidden {
		message: string
		errors: {
			name: string
			reason: string
		}[]
	}
}
