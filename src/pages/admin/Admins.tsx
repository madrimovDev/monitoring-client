import { getAllAdmins, useActionCreator, useAppSelector } from '@store'
import { Skeleton } from 'antd'
import React, { useEffect } from 'react'

const Admins = () => {
	const status = useAppSelector((state) => state.admins.status)
	const actions = useActionCreator({
		getAllAdmins
	})

	useEffect(() => {
		actions.getAllAdmins()
	}, [])

	if (status === 'pending') {
		return (
			<>
				<Skeleton />
			</>
		)
	}

	return <div>Admins</div>
}

export default Admins
