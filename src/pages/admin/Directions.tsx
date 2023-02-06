import React, { useEffect } from 'react'
import { Col, Row } from 'antd'
import { getAllDirections, useActionCreator } from '@store'
import { DirectionsList } from '@components'

const Directions = () => {
	const actions = useActionCreator({ getAllDirections })

	useEffect(() => {
		actions.getAllDirections()
	}, [])

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
