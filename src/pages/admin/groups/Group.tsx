import React from 'react'
import { useParams } from 'react-router-dom'
import { Card, Divider, Typography } from 'antd'
import { Header, Lessons, Students } from '@components'

const { Title } = Typography

const Group = () => {
	const { id } = useParams<{ id: string }>()

	if (!id) return null

	return (
		<Card>
			<Header id={id} />
			<Divider />
			<Title level={4}>Students</Title>
			<Students id={id} />
			<Divider />
			<Title level={4}>Lessons</Title>
			<Lessons id={id} />
		</Card>
	)
}

export default Group
