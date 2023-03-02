import { api as base, makeBaseUrl } from '@/shared'

const api = {
	baseUrl: makeBaseUrl('directions'),
	async getAllDirections() {
		const response = await base.get<Directions.DirectionsResponse>(this.baseUrl)
		return response.data
	},
	async createDirection(name: string) {
		const response = await base.post<Directions.DirectionResponse>(this.baseUrl, { name })
		return response.data
	},
	async updateDirection(direction: Directions.Direction, id: number) {
		const response = await base.put<Directions.DirectionResponse>(`${this.baseUrl}/${id}`, {
			...direction
		})
		return response.data
	},
	async deleteDirection(id: number) {
		const response = await base.delete<Directions.DirectionResponse>(`${this.baseUrl}/${id}`)
		return response.data
	}
}

export default api