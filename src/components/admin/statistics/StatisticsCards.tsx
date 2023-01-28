import React from 'react'
import { useAppSelector } from '@store'
import { Card, Col, Row, Statistic } from 'antd'

const StatisticsCards = () => {
	const statistics = useAppSelector((state) => state.dashboard.statistics)

	if (!statistics) return null
	return (
		<Row gutter={16}>
			<Col
				xs={24}
				md={8}>
				<Card bordered>
					<Statistic
						title={'Teachers'}
						value={statistics.teachers}
					/>
				</Card>
			</Col>
			<Col
				xs={24}
				md={8}>
				<Card bordered>
					<Statistic
						title={'Students'}
						value={statistics.students}
					/>
				</Card>
			</Col>
			<Col
				xs={24}
				md={8}>
				<Card bordered>
					<Statistic
						title={'Groups'}
						value={statistics.groups}
					/>
				</Card>
			</Col>
		</Row>
	)
}

export default StatisticsCards
