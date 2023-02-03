import React, { useEffect, useLayoutEffect } from 'react'
import { closeModal, createAdmin, updateAdmin, useActionCreator, useAppSelector } from '@store'
import { Button, Form, Input, Modal, notification } from 'antd'

const CreateAdminModal = () => {
	const adminModal = useAppSelector(state => state.modals.adminModal)

	const { message, status } = useAppSelector(state => state.admins)

	const [form] = Form.useForm()

	const actions = useActionCreator({
		closeModal,
		createAdmin,
		updateAdmin
	})

	const onSubmit = (e: Admin.NewAdmin) => {
		if (adminModal.type === 'create') {
			actions.createAdmin(e)
		} else if (adminModal.type === 'update' && adminModal.data) {
			actions.updateAdmin({
				id: adminModal.data.id,
				data: e
			})
		}
	}

	useEffect(() => {
		if (status === 'fulfilled' && adminModal.open) {
			notification.info({
				message: 'Admin Created'
			})
			return form.resetFields()
		}
		if (status === 'rejected' && adminModal.open) {
			return notification.error({
				message: message
			})
		}
	}, [status])

	useLayoutEffect(() => {
		if (adminModal.data) {
			const data = adminModal.data
			const fields = Object.keys(data).map(key => {
				return {
					name: key,
					value: data[key as keyof Admin.Admin]
				}
			})
			form.setFields(fields)
		}
	}, [adminModal.data])

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
					<Input autoComplete='off' />
				</Form.Item>
				<Form.Item
					rules={[
						{
							required: true
						}
					]}
					name='name'
					label='Name'>
					<Input autoComplete='off' />
				</Form.Item>
				<Form.Item
					rules={[
						{
							required: adminModal.type === 'create'
						}
					]}
					label='Password'
					name='password'>
					<Input.Password
						autoComplete='new-password'
						role='presentation'
					/>
				</Form.Item>
				<Button
					type='primary'
					htmlType='submit'>
					{adminModal.type.toUpperCase()}
				</Button>
			</Form>
		</Modal>
	)
}

export default CreateAdminModal
