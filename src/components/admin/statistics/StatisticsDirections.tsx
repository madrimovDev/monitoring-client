import React from 'react'
import { useAppSelector } from '@store'
import { Card, Col, List, Row } from 'antd'

const StatisticsDirections = () => {
	const directions = useAppSelector(state => state.admin.dashboard.data?.directions)

	if (!directions) return null

	return (
		<Row gutter={[16, 16]}>
			{directions.map(direction => {
				return (
					<Col
						key={direction.id}
						xs={24}
						md={12}
						lg={6}>
						<Card title={direction.name}>
							<List>
								<List.Item>
									<List.Item.Meta title={'Groups'} />
									<div>{direction.groups}</div>
								</List.Item>
								<List.Item>
									<List.Item.Meta title={'Students'} />
									<div>{direction.students}</div>
								</List.Item>
								<List.Item>
									<List.Item.Meta title={'Teachers'} />
									<div>{direction.teachers.length}</div>
								</List.Item>
							</List>
						</Card>
					</Col>
				)
			})}
		</Row>
	)
}

export default StatisticsDirections
