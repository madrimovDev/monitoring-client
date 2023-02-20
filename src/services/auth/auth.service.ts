import api from '@api'

const AuthService = {
	baseUrl: '/auth',
	async login(username: string, password: string): Promise<Auth.User> {
		const response = await api.post<Auth.User & { token: string }>(`${this.baseUrl}/login`, { username, password })
		window.localStorage.setItem('accessToken', response.data.token)
		window.localStorage.setItem('organizationId', response.data.organizationId.toString())
		return {
			username: response.data.username,
			userId: response.data.userId,
			organizationId: response.data.organizationId,
			permissions: response.data.permissions
		}
	}
}

export default AuthService
