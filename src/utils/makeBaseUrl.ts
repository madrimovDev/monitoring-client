const makeBaseUrl = (url: string) => {
	return '/organizations/' + localStorage.getItem('organizationId') + '/' + url
}

export default makeBaseUrl
