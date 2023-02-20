declare namespace Auth {
	export interface User {
		userId: number,
		username: string,
		permissions: ['surpervisor'] | ['admin'] | ['teacher'],
		organizationId: number
	}
}