import React, { useEffect, useLayoutEffect } from 'react'
import { closeModal, useActionCreator, useAppSelector, getAllDirections, createStudent, updateStudent } from '@store'
import { Button, Form, Input, Modal, notification } from 'antd'

const CreateStudentModal = () => {
	const studentModal = useAppSelector(state => state.modals.studentModal)
	const directions = useAppSelector(state => state.directions.data)

	const { message, status } = useAppSelector(state => state.teachers)

	const [form] = Form.useForm()

	const actions = useActionCreator({
		closeModal,
		createStudent,
		updateStudent,
		getAllDirections
	})

	const onSubmit = (e: Students.NewStudent) => {
		if (studentModal.type === 'create') {
			actions.createStudent({
				...e
			})
		}
		// else if (studentModal.type === 'update' && studentModal.data) {
		// 	actions.updateStudent({
		// 		teacher: e,
		// 		id: studentModal.data.id
		// 	})
		// }
	}

	useEffect(() => {
		if (!directions && studentModal.open) {
			actions.getAllDirections()
		}
	}, [studentModal.open])

	useEffect(() => {
		if (status === 'fulfilled' && studentModal.open) {
			notification.info({
				message: 'Admin Created'
			})
			return form.resetFields()
		}
		if (status === 'rejected' && studentModal.open) {
			return notification.error({
				message: message
			})
		}
	}, [status])

	useLayoutEffect(() => {
		if (studentModal.data) {
			const data = studentModal.data
			const fields = Object.keys(data).map(key => {
				return {
					name: key,
					value: data[key as keyof Students.Student]
				}
			})
			form.setFields(fields)
		}
	}, [studentModal.data])

	return (
		<Modal
			open={studentModal.open}
			onCancel={() => {
				actions.closeModal()
				form.resetFields()
			}}
			footer={null}
			title={studentModal.type.toUpperCase() + ' STUDENT'}>
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
					name='name'
					label='Name'>
					<Input autoComplete='off' />
				</Form.Item>
				<Form.Item
					rules={[
						{
							required: true
						}
					]}
					name='surname'
					label='Surname'>
					<Input autoComplete='off' />
				</Form.Item>
				<Form.Item
					rules={[
						{
							required: true,
							type: 'string'
						}
					]}
					name='phone'
					label='Phone'>
					<Input
						addonBefore={'+998'}
						type='text'
						style={{ width: '100%' }}
					/>
				</Form.Item>
				<Form.Item
					name='birthday'
					label='Birthday'
					rules={[
						{
							required: true,
							type: 'date'
						}
					]}>
					<Input type='date' />
				</Form.Item>
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
							required: studentModal.type === 'create'
						}
					]}
					name='password'
					label='Password'>
					<Input.Password autoComplete='new-password' />
				</Form.Item>
				<Button
					type='primary'
					htmlType='submit'>
					{studentModal.type.toUpperCase()}
				</Button>
			</Form>
		</Modal>
	)
}

export default CreateStudentModal
