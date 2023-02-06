import React from 'react'
import { Divider } from 'antd'
import { StatisticsCards, StatisticsDirections } from '@components'
import { getStatistics, useActionCreator } from '@store'

const Statistics = () => {
	const actions = useActionCreator({ getStatistics })
	actions.getStatistics()

	return (
		<>
			<StatisticsCards />
			<Divider />
			<StatisticsDirections />
		</>
	)
}

export default Statistics
