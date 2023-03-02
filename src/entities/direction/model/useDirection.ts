import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { makeBaseUrl, api } from '@/shared'

const useDirection = () => {
	const { directionId } = useParams()
	const baseUrl = makeBaseUrl('directions/' + directionId)

	// const getDirection = async () => {
	// 	const response = await api.get<Direction.DirectionResponse>(baseUrl)
	// 	return
	// }

	const direction = useQuery('direction/get', {
		queryFn: async () => {
			const response = await api.get<Direction.DirectionResponse>(baseUrl)
			return response.data
		}
	})

	return {
		direction
	}
}

export default useDirection
