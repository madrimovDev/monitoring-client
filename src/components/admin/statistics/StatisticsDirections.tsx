import { useAppSelector } from '@store'
import { Card, Col, Collapse, List, Row } from 'antd'
import React from 'react'

const StatisticsDirections = () => {
	const directions = useAppSelector((state) => state.dashboard.statistics?.directions)

	if (!directions) return null

	return (
		<Row gutter={16}>
			{directions.map((direction) => {
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
								<Collapse
									accordion
									bordered={false}
									collapsible='icon'
									ghost
									expandIconPosition='start'>
									<Collapse.Panel
										key='1'
										header={
											<div
												style={{
													display: 'flex',
													justifyContent: 'space-between',
													alignItems: 'center',
													marginRight: 8
												}}>
												<span>Teachers</span>
												<div>{direction.teachers.length}</div>
											</div>
										}>
										{!direction.teachers.length && 'No Data'}
									</Collapse.Panel>
								</Collapse>
							</List>
						</Card>
					</Col>
				)
			})}
		</Row>
	)
}

export default StatisticsDirections
