import {api as base, makeBaseUrl} from '@/shared'

const api = {
	baseUrl: makeBaseUrl('directions'),
	async getAllDirections() {
		const response = await base.get<Directions.DirectionsResponse>(this.baseUrl)
		return response.data
	}
}

export default api
