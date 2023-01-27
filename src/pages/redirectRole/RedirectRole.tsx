import React from 'react'
import { useAppSelector } from '@store'
import { Navigate, useLocation } from 'react-router-dom'

const RedirectRole = () => {
	const permission = useAppSelector((state) => state.user.user?.permissions[0])
	const location = useLocation()

	return permission === 'admin' ? (
		<Navigate
			to='/admin'
			replace
			state={{
				from: location
			}}
		/>
	) : permission === 'teacher' ? (
		<Navigate
			to='/teacher'
			replace
			state={{
				from: location
			}}
		/>
	) : permission === 'student' ? (
		<Navigate
			to='/student'
			replace
			state={{
				from: location
			}}
		/>
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

export default RedirectRole
