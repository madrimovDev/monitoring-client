import React from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const GoBack = () => {
	const navigate = useNavigate()
	return <Button onClick={() => navigate(-1)}>GoBack</Button>
}

export default GoBack
