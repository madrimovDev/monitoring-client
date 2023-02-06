import React from 'react'
import { TeachersTable } from '@components'
import { getAllTeachers } from '@store'
import { useCacheDispatch } from '@hooks'

const Teachers = () => {
	useCacheDispatch(getAllTeachers, {
		teachers: 10_000
	})

	return (
		<>
			<TeachersTable />
		</>
	)
}

export default Teachers
