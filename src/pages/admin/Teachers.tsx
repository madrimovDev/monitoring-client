import { TeachersTable } from '@components'
import { getAllTeachers, useActionCreator } from '@store'
import React, { useEffect } from 'react'

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
