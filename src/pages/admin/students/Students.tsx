import { useCacheDispatch } from '@hooks'
import { getAllStudents } from '@store'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Students = () => {
	useCacheDispatch(getAllStudents, { students: 10_000 })
	return <Outlet />
}

export default Students
