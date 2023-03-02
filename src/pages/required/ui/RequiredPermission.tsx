/* eslint-disable indent */
import React from 'react'
import { sessionStorage } from '@/shared'
import { Navigate } from 'react-router-dom'

const RequiredPermission = () => {
	const permissions = sessionStorage.get('permissions')
	const permission = permissions ? (JSON.parse(permissions) as string[]) : null

	if(!permission) return <Navigate to='/login'/>
	
	switch (permission[0]) {
		case 'admin':
			return <Navigate to='admin' />
		case 'teacher':
			return <Navigate to='teacher' />
		default:
			return <Navigate to='/admin' />
	}
}

export default RequiredPermission
