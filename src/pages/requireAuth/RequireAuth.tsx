import React from 'react'
import { useAppSelector } from '@store'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const RequireAuth = () => {
	const user = useAppSelector((state) => state.user.user)
	const location = useLocation()
	return user ? (
		<Outlet />
	) : (
		<Navigate
			to='/login'
			replace
			state={{
				from: location
			}}
		/>
	)
}

export default RequireAuth
