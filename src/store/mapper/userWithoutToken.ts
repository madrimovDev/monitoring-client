export const userWithoutToken = (user: Auth.LoginResponse | Auth.VerifyResponse): Auth.VerifyResponse => {
	return {
		userId: user.userId,
		permissions: user?.permissions,
		username: user?.username
	}
}
