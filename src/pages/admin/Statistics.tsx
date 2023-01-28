import React, { useEffect } from 'react'
import { Divider, Skeleton } from 'antd'
import { StatisticsCards, StatisticsDirections } from '@components'
import { getStatistics, useActionCreator, useAppSelector } from '@store'

const Statistics = () => {
	const status = useAppSelector((state) => state.dashboard.status)

	const actions = useActionCreator({
		getStatistics
	})

	useEffect(() => {
		actions.getStatistics()
	}, [])

	if (status === 'pending') {
		return (
			<>
				<Skeleton />
			</>
		)
	}

	return (
		<>
			<StatisticsCards />
			<Divider />
			<StatisticsDirections />
		</>
	)
}

export default Statistics
