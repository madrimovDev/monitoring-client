import React, { useEffect } from 'react'
import { closeModal, createAdmin, useActionCreator, useAppSelector } from '@store'
import { Button, Form, Input, Modal, notification } from 'antd'

const CreateAdminModal = () => {
	const adminModal = useAppSelector((state) => state.modals.adminModal)

	const { message, status } = useAppSelector((state) => state.admins)

	const [form] = Form.useForm()

	const actions = useActionCreator({
		closeModal,
		createAdmin
	})

	const onSubmit = (e: Admin.NewAdmin) => {
		actions.createAdmin(e)
	}

	useEffect(() => {
		if (status === 'fulfilled') {
			notification.info({
				message: 'Admin Created'
			})
			return form.resetFields()
		}
		if (status === 'rejected') {
			return notification.error({
				message: message
			})
		}
	}, [status])

	return (
		<Modal
			open={adminModal.open}
			onCancel={() => actions.closeModal()}
			footer={null}
			title={adminModal.type.toUpperCase() + ' ADMIN'}>
			<Form
				form={form}
				onFinish={onSubmit}
				layout='horizontal'
				labelCol={{
					xs: 4
				}}
				labelAlign='left'
				autoComplete='off'>
				<Form.Item
					rules={[
						{
							required: true
						}
					]}
					name='username'
					label='Username'>
					<Input />
				</Form.Item>
				<Form.Item
					rules={[
						{
							required: true
						}
					]}
					name='name'
					label='Name'>
					<Input />
				</Form.Item>
				<Form.Item
					rules={[
						{
							required: true
						}
					]}
					label='Password'
					name='password'>
					<Input.Password />
				</Form.Item>
				<Button
					type='primary'
					htmlType='submit'>
					Create
				</Button>
			</Form>
		</Modal>
	)
}

export default CreateAdminModal
