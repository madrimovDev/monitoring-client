export const userWithoutToken = (user: Auth.LoginResponse | undefined): Auth.VerifyResponse => {
	return {
		userId: user?.userId,
		permissions: user?.permissions,
		username: user?.username
		
	}
}