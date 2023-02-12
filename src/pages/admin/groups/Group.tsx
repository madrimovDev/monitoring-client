import React from 'react'
import { useParams } from 'react-router-dom'
import { Card, Divider, Typography } from 'antd'
import { Header, Lessons, Students } from '@components'

const { Title } = Typography

const Group = () => {
	const { groupId } = useParams<{ groupId: string }>()

	if (!groupId) return null

	return (
		<Card>
			<Header id={groupId} />
			<Divider />
			<Title level={4}>Students</Title>
			<Students id={groupId} />
			<Divider />
			<Title level={4}>Lessons</Title>
			<Lessons id={groupId} />
		</Card>
	)
}

export default Group
