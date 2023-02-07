import React from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import RollbackOutlined from '@ant-design/icons/RollbackOutlined'

const GoBack = () => {
	const navigate = useNavigate()
	return (
		<Button
			onClick={() => navigate(-1)}
			icon={<RollbackOutlined />}
			shape='circle'
			danger
			type='primary'
		/>
	)
}

export default GoBack
