import { AxiosError } from 'axios'
import { useToast } from '@chakra-ui/react'
import { useQuery } from 'react-query'
import { useDirectionsStore } from '@/entities'
import { directionsApi } from '@/entities/directions'

const useGetDirections = () => {
	const setDirections = useDirectionsStore(state => state.setDirections)
	const toast = useToast({
		position: 'top-right'
	})

	return useQuery('directions', {
		queryFn: async () => {
			return await directionsApi.getAllDirections()
		},
		onSuccess(data) {
			setDirections(data.directions)
		},
		onError(e) {
			const error = e as AxiosError
			toast({
				status: 'error',
				title: error.response?.statusText,
				description: error.message
			})
		}
	})
}
export default useGetDirections
