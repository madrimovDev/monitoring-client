import React from 'react'
import { getAllTeachers } from '@store'
import { useCacheDispatch } from '@hooks'
import { Outlet } from 'react-router-dom'

const Teachers = () => {
	useCacheDispatch(getAllTeachers, {
		teachers: 10_000
	})

	return <Outlet />
}

export default Teachers
