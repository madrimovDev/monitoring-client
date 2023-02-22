import React from 'react'
import { DataSource } from '../Menu'
import adminMenuItems from './adminMenuItems'



const useMenuItems = (): DataSource[] => {
	const permissions = window.localStorage.getItem('permissions')
	const permission = permissions ? JSON.parse(permissions)[0] : null

	if (permission === 'admin') {
		return adminMenuItems
	}
	return []
}

export default useMenuItems
