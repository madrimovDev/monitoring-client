import React, { useEffect, useLayoutEffect } from 'react'
import { closeModal, createTeacher, useActionCreator, useAppSelector } from '@store'
import { Button, Form, Input, Modal, Select, notification } from 'antd'
import { Teachers } from '@pages'

const CreateTeacherModal = () => {
	const teacherModal = useAppSelector(state => state.modals.teacherModal)
	const directions = useAppSelector(state => state.directions.data)

	const { message, status } = useAppSelector(state => state.teachers)

	const [form] = Form.useForm()

	const actions = useActionCreator({
		closeModal,
		createTeacher
	})

	const onSubmit = (e: Teachers.NewTeacher) => {
		if (teacherModal.type === 'create') {
			actions.createTeacher({
				...e,
				directions: e.directions.map(i => Number(i))
			})
		}
		// else if (teacherModal.type === 'update' && teacherModal.data) {
		// 	actions.updateDirection({
		// 		direction: e,
		// 		id: teacherModal.data.id
		// 	})
		// }
	}

	useEffect(() => {
		if (status === 'fulfilled' && teacherModal.open) {
			notification.info({
				message: 'Admin Created'
			})
			return form.resetFields()
		}
		if (status === 'rejected' && teacherModal.open) {
			return notification.error({
				message: message
			})
		}
	}, [status])

	useLayoutEffect(() => {
		if (teacherModal.data) {
			const data = teacherModal.data
			const fields = Object.keys(data).map(key => {
				return {
					name: key,
					value: data[key as keyof Teachers.Teacher]
				}
			})
			form.setFields(fields)
		}
	}, [teacherModal.data])

	return (
		<Modal
			open={teacherModal.open}
			onCancel={() => {
				actions.closeModal()
				form.resetFields()
			}}
			footer={null}
			title={teacherModal.type.toUpperCase() + ' TEACHER'}>
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
						type='text'
						style={{ width: '100%' }}
					/>
				</Form.Item>
				<Form.Item
					name='directions'
					label='Directions'
					rules={[
						{
							required: true,
							type: 'array'
						}
					]}>
					<Select
						mode='multiple'
						allowClear
						placeholder='Please select directions'
						options={directions?.map(i => ({
							label: i.name,
							value: i.id
						}))}
					/>
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
							required: true
						}
					]}
					name='password'
					label='Password'>
					<Input.Password autoComplete='off' />
				</Form.Item>
				<Button
					type='primary'
					htmlType='submit'>
					{teacherModal.type.toUpperCase()}
				</Button>
			</Form>
		</Modal>
	)
}

export default CreateTeacherModal
