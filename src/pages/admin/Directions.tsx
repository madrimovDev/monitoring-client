import React from 'react'
import { Col, Row } from 'antd'
import { DirectionsList } from '@components'
import { useCacheDispatch } from '@hooks'
import { getAllDirections } from '@store'

const Directions = () => {
	useCacheDispatch(getAllDirections, {
		directions: 10_000
	})

	return (
		<Row>
			<Col
				xs={12}
				offset={6}>
				<DirectionsList />
			</Col>
		</Row>
	)
}

export default Directions
