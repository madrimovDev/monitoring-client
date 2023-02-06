import React from 'react'
import { Divider } from 'antd'
import { StatisticsCards, StatisticsDirections } from '@components'
import { getStatistics } from '@store'
import { useCacheDispatch } from '@hooks'

const Statistics = () => {
	useCacheDispatch(getStatistics, {
		statistics: 10_000
	})

	return (
		<>
			<StatisticsCards />
			<Divider />
			<StatisticsDirections />
		</>
	)
}

export default Statistics
