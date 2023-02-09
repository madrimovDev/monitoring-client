import React from 'react'
import { Skeleton } from 'antd'

const CustomSkeleton = () => {
	return (
		<Skeleton
			active
			title={{
				style: {
					height: 30
				}
			}}
			round
			loading
			paragraph={{
				rows: 6
			}}
		/>
	)
}

export default CustomSkeleton
