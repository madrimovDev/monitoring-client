import { useAppSelector } from '@store'
import React from 'react'

const Statistics = () => {
	const statistics = useAppSelector(state => state.dashboard.statistics)
	if(!statistics) return null
	return (
		<div>

		</div>
	)
}

export default Statistics