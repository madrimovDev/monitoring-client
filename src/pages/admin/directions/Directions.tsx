import React from 'react'
import { useCacheDispatch } from '@hooks'
import { getAllDirections } from '@store'
import { Outlet } from 'react-router-dom'

const Directions = () => {
	useCacheDispatch(getAllDirections, {
		directions: 10_000
	})

	return <Outlet />
}

export default Directions
