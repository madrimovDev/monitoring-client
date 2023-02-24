type SessionStorageKey = 'permissions' | 'userId' | 'organizationId' | 'username' | 'token'

type GetStorage = (key: SessionStorageKey) => string
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SetStorage = (key: string, data: any) => void

const set: SetStorage = (key, data) => {
	window.sessionStorage.setItem(key, JSON.stringify(data))
}

const get: GetStorage = key => {
	const data = window.sessionStorage.getItem(key)
	return data || ''
}

export default {
	set,
	get
}
