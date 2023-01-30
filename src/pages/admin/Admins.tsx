import React, { useEffect } from 'react'
import { Col, Row } from 'antd'
import { getAllAdmins, useActionCreator } from '@store'
import { AdminsList } from '@components'

const Admins = () => {
	const actions = useActionCreator({
		getAllAdmins
	})

	useEffect(() => {
		actions.getAllAdmins()
	}, [])

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
