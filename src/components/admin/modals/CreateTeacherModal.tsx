import React, { useEffect, useLayoutEffect } from 'react'
import { closeModal, createTeacher, useActionCreator, useAppSelector, getAllDirections, updateTeacher } from '@store'
import { Button, Form, Input, Modal, Select, notification } from 'antd'

const CreateTeacherModal = () => {
	const teacherModal = useAppSelector(state => state.admin.modals.teacherModal)
	const directions = useAppSelector(state => state.admin.directions.data)

	const { message, status } = useAppSelector(state => state.admin.teachers)

	const [form] = Form.useForm()

	const actions = useActionCreator({
		closeModal,
		createTeacher,
		updateTeacher,
		getAllDirections
	})

	const onSubmit = (e: Teachers.NewTeacher) => {
		if (teacherModal.type === 'create') {
			actions.createTeacher({
				...e,
				directions: e.directions.map(i => Number(i))
			})
		} else if (teacherModal.type === 'update' && teacherModal.data) {
			actions.updateTeacher({
				teacher: e,
				id: teacherModal.data.id
			})
		}
	}

	useEffect(() => {
		if (!directions && teacherModal.open) {
			actions.getAllDirections()
		}
	}, [teacherModal.open])

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
				if (key === 'directions') {
					return {
						name: key,
						value: data.directions.map(dir => dir.id)
					}
				}
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
						addonBefore={'+998'}
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
						options={directions?.map(dir => ({
							label: dir.name,
							value: dir.id
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
							required: teacherModal.type === 'create'
						}
					]}
					name='password'
					label='Password'>
					<Input.Password autoComplete='new-password' />
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
