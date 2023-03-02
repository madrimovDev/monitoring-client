import { useToast } from '@chakra-ui/react'
import { AxiosError } from 'axios'
import { useMutation } from 'react-query'
import api from './api'
import useDirectionsStore from './useDirectionStore'

const directionsActions = () => {
	const direction = useDirectionsStore()

	const toast = useToast({
		position: 'top-right'
	})

	const createDirection = () =>
		useMutation<Directions.DirectionResponse, AxiosError, string, unknown>('direction/create', {
			mutationFn: async name => {
				const response = await api.createDirection(name)
				return response
			},
			onSuccess(data) {
				direction.createDirection(data.direction)
				toast({
					status: 'info',
					title: data.message,
					description: data.direction.name
				})
			},
			onError(error) {
				toast({
					status: 'error',
					title: error.response?.statusText,
					description: error.message
				})
			}
		})

	const updateDirection = () =>
		useMutation<
			Directions.DirectionResponse,
			AxiosError,
			{
				direction: Directions.Direction
				id: number
			},
			unknown
		>('admins/update', {
			mutationFn: async ({ direction, id }) => {
				const response = await api.updateDirection(direction, id)
				return response
			},
			onSuccess(data) {
				direction.updateDirection(data.direction)
				toast({
					status: 'info',
					title: data.message,
					description: data.direction.name
				})
			},
			onError(error) {
				toast({
					status: 'info',
					title: error.response?.statusText,
					description: error.message
				})
			}
		})

	const deleteDirection = () =>
		useMutation<Directions.DirectionResponse, AxiosError, number, unknown>('admins/delete', {
			mutationFn: async id => {
				const response = await api.deleteDirection(id)
				return response
			},
			onSuccess(data) {
				direction.deleteDirection(data.direction.id)
				toast({
					title: data.message,
					description: data.direction.name
				})
			}
		})

	return {
		createDirection,
		updateDirection,
		deleteDirection
	}
}

export default directionsActions
