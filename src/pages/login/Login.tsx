import React, { CSSProperties, useEffect } from 'react'
import { login, useActionCreator, useAppSelector } from '@store'
import { Button, Card, Form, Input, Typography, notification } from 'antd'
import { useNavigate } from 'react-router-dom'

const style: CSSProperties = {
	minHeight: '100dvh',
	display: 'grid',
	placeItems: 'center'
}

const { Item } = Form

const Login = () => {
	const status = useAppSelector((state) => state.user.status)
	const message = useAppSelector((state) => state.user.message)
	const actions = useActionCreator({ login })
	const navigate = useNavigate()

	const onFinish = (data: { username: string; password: string }) => {
		actions.login(data)
	}

	useEffect(() => {
		if (status === 'fulfilled') {
			notification.success({
				message: 'Login successful'
			})
			navigate('/')
		} else if (status === 'rejected') {
			notification.error({
				message: message
			})
		}
	}, [status])

	console.log('render')

	return (
		<div style={style}>
			<Card>
				<Form
					style={{
						width: 300
					}}
					name='Login'
					layout='vertical'
					autoComplete='off'
					onFinish={onFinish}>
					<Typography.Title level={3}>Welcome Back</Typography.Title>
					<Item
						label='Username'
						name='username'
						rules={[
							{
								required: true,
								message: 'Username is required'
							},
							{
								min: 4,
								message: 'Min character length 4'
							}
						]}>
						<Input type='text' />
					</Item>
					<Item
						label='Password'
						name='password'
						rules={[
							{
								required: true,
								message: 'Password is required'
							},
							{
								min: 4,
								message: 'Min Character length 4'
							}
						]}>
						<Input.Password />
					</Item>
					<Button
						htmlType='submit'
						type='primary'
						loading={status === 'pending'}>
						Submit
					</Button>
				</Form>
			</Card>
		</div>
	)
}

export default Login
