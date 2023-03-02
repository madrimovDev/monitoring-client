import sessionStorage from './sessionStorage'

const makeBaseUrl = (url: string) => {
	const orgId = sessionStorage.get('organizationId')

	return `organizations/${orgId}/${url}`
}

export default makeBaseUrl
