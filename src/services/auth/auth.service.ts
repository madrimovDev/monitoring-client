import api from '@api'

class AuthService {
	static baseUrl = '/auth'
	static async login({ username, password }: Auth.LoginRequest): Promise<Auth.LoginResponse | undefined> {
		const response = await api.post<Auth.LoginResponse>(`${this.baseUrl}/login`, { username, password })
		window.localStorage.setItem('accessToken', response.data.token)
		return response.data
	}
	static async verify(): Promise<Auth.VerifyResponse | undefined> {
		const response = await api.get<Auth.VerifyResponse>(`${this.baseUrl}/verify`)
		return response.data
	}
}

export default AuthService
