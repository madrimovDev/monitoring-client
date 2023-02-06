import React from 'react'
import { Col, Row } from 'antd'
import { getAllAdmins } from '@store'
import { AdminsList } from '@components'
import { useCacheDispatch } from '@hooks'

const Admins = () => {
	useCacheDispatch(getAllAdmins, {
		admins: 10_000
	})

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
