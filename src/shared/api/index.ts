import axios from 'axios'
import sessionStorage from '../helpers/sessionStorage'

const api = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	timeout: 2000
})

api.interceptors.request.use(
	async config => {
		const token = sessionStorage.get('token')
		config.headers = config.headers ?? {}

		if (token) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-expect-error
			config.headers.Authorization = JSON.parse(token)
		}

		return config
	},
	error => {
		console.log(error)
	}
)

export default api
