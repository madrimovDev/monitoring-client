import api from '@api'

class DirectionsService {
	static baseUrl = '/directions'
	static async getDirections() {
		const response = await api.get<Directions.DirectionsResponse>(this.baseUrl)
		return response
	}
	static async createDirection(direction: Directions.NewDirection) {
		const response = await api.post<Directions.DirectionResponse>(this.baseUrl, direction)
		return response
	}
	static async deleteDirection(id: string | number) {
		const response = await api.delete<Directions.DirectionResponse>(`${this.baseUrl}/${id}`)
		return response
	}
	static async updateDirection(direction: Directions.NewDirection, id: string | number) {
		const response = await api.put<Directions.DirectionResponse>(`${this.baseUrl}/${id}`, direction)
		return response
	}
}

export default DirectionsService
