import React from 'react'
import { sessionStorage } from '@/shared'
import { Navigate, Outlet } from 'react-router-dom'

const RequiredAuth = () => {
	const user = sessionStorage.get('username')
	return user ? <Outlet/> : <Navigate to='/login' replace/>
}

export default RequiredAuth