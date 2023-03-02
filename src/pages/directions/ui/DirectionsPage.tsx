import React from 'react'
import { Outlet } from 'react-router-dom'
import { DirectionsModal } from '@/entities/directions'

const DirectionsPage = () => {
	return (
		<>
			<DirectionsModal />
			<Outlet />
		</>
	)
}

export default DirectionsPage
