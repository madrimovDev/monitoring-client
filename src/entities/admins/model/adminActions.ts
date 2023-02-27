import { useToast } from '@chakra-ui/react'
import { AxiosError } from 'axios'
import { useMutation } from 'react-query'
import api from './api'
import useAdmins from './useAdmins'

const adminActions = () => {
	const admin = useAdmins()
	const toast = useToast({
		position: 'top-right'
	})

	const createAdmin = () =>
		useMutation<
			{
				admin: Admins.Admin
				message: string
			},
			AxiosError,
			Admins.NewAdmin,
			unknown
		>('admins/create', {
			mutationFn: async ({ name, password, username }) => {
				const response = await api.createAdmin({ name, username, password })
				return response
			},
			onSuccess(data) {
				admin.createAdmin(data.admin)
				toast({
					status: 'info',
					title: data.message,
					description: data.admin.name
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

	const updateAdmin = () =>
		useMutation<
			{
				admin: Admins.Admin
				message: string
			},
			AxiosError,
			Admins.NewAdmin & { id: number },
			unknown
		>('admins/update', {
			mutationFn: async ({ name, username, password, id }) => {
				const response = await api.updateAdmin({ name, username, password }, id)
				return response
			},
			onSuccess(data) {
				admin.updateAdmin(data.admin)
				toast({
					status: 'info',
					title: data.message,
					description: data.admin.name
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

	const deleteAdmin = () =>
		useMutation<
			{
				admin: Admins.Admin
				message: string
			},
			AxiosError,
			number,
			unknown
		>('admins/delete', {
			mutationFn: async id => {
				const response = await api.deleteAdmin(id)
				return response
			},
			onSuccess(data) {
				admin.deleteAdmin(data.admin)
				toast({
					title: data.message,
					description: data.admin.name
				})
			}
		})

	return {
		createAdmin,
		updateAdmin,
		deleteAdmin
	}
}

export default adminActions
