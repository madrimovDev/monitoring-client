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
	export type VerifyResponse = Omit<AuthResponse, 'token'>

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
