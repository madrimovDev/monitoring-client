import React from 'react'
import StatisticsCards from './StatisticsCards'
import { Divider } from 'antd'
import StatisticsDirections from './StatisticsDirections'

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
