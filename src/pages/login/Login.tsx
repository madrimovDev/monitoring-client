import React, { CSSProperties } from 'react'
import { login, useActionCreator } from '@store'
import { Button, Card, Form, Input, Typography } from 'antd'

const style: CSSProperties = {
	minHeight: '100dvh',
	display: 'grid',
	placeItems: 'center'
}

const { Item } = Form

const Login = () => {
	const actions = useActionCreator({ login })

	const onFinish = (data: { username: string; password: string }) => {
		actions.login(data)
	}

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
						type='primary'>
						Submit
					</Button>
				</Form>
			</Card>
		</div>
	)
}

export default Login
