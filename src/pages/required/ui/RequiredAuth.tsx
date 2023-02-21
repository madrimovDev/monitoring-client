import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const RequiredAuth = () => {
	const user = window.localStorage.getItem('username')
	return user ? <Outlet/> : <Navigate to='/login' replace/>
}

export default RequiredAuth