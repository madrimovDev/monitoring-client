import React, { useEffect } from 'react'
import { TeachersTable } from '@components'
import { getAllTeachers, useActionCreator } from '@store'

const Teachers = () => {
	const actions = useActionCreator({
		getAllTeachers
	})

	useEffect(() => {
		actions.getAllTeachers()
	}, [])

	return (
		<>
			<TeachersTable />
		</>
	)
}

export default Teachers
