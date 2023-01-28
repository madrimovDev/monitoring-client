import React, { useEffect } from 'react'
import { Col, Row, Skeleton } from 'antd'
import { getAllAdmins, useActionCreator, useAppSelector } from '@store'
import { AdminsList } from '@components'

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

	return (
		<Row>
			<Col
				xs={12}
				offset={6}>
				<AdminsList />
			</Col>
		</Row>
	)
}

export default Admins
