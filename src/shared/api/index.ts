import axios from 'axios'

const api = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	timeout: 2000
})

api.interceptors.request.use(
	async config => {
		const token = window.localStorage.getItem('token')
		config.headers = config.headers ?? {}

		if (token) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			//@ts-ignore
			config.headers.Authorization = JSON.parse(token)
		}

		return config
	},
	error => {
		console.log(error)
	}
)

export default api
