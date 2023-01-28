import React from 'react'
import { Divider } from 'antd'
import { StatisticsCards, StatisticsDirections } from '@components'

const Statistics = () => {
	return (
		<>
			<StatisticsCards />
			<Divider />
			<StatisticsDirections />
		</>
	)
}

export default Statistics
