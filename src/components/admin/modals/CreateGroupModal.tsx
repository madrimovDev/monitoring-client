import React, { useEffect, useLayoutEffect } from 'react'
import { closeModal, createGroup, getAllDirections, updateGroup, useActionCreator, useAppSelector } from '@store'
import { Button, Form, Input, InputNumber, Modal, Select, notification } from 'antd'

const CreateGroupModal = () => {
	const groupModal = useAppSelector(state => state.modals.groupModal)
	const directions = useAppSelector(state => state.directions.data)

	const { message, status } = useAppSelector(state => state.groups)

	const [form] = Form.useForm()

	const actions = useActionCreator({
		closeModal,
		createGroup,
		updateGroup,
		getAllDirections
	})

	const onSubmit = (e: Groups.NewGroup) => {
		console.log(e)

		if (groupModal.type === 'create') {
			actions.createGroup(e)
		} else if (groupModal.type === 'update' && groupModal.data) {
			actions.updateGroup({
				id: groupModal.data.id,
				group: e
			})
		}
	}

	useEffect(() => {
		if (status === 'fulfilled' && groupModal.open) {
			notification.info({
				message: 'Admin Created'
			})
			return form.resetFields()
		}
		if (status === 'rejected' && groupModal.open) {
			return notification.error({
				message: message
			})
		}
	}, [status])

	useEffect(() => {
		if (!directions) {
			actions.getAllDirections()
		}
	}, [])

	useLayoutEffect(() => {
		if (groupModal.data) {
			const data = groupModal.data
			const fields = Object.keys(data).map(key => {
				return {
					name: key,
					value: data[key as keyof Groups.Group]
				}
			})
			form.setFields(fields)
		}
	}, [groupModal.data])

	return (
		<Modal
			open={groupModal.open}
			onCancel={() => actions.closeModal()}
			footer={null}
			title={groupModal.type.toUpperCase() + ' GROUP'}>
			<Form
				form={form}
				onFinish={onSubmit}
				layout='vertical'
				labelAlign='left'
				autoComplete='off'>
				<Form.Item
					rules={[
						{
							required: true
						}
					]}
					name='name'
					label='Group Name'>
					<Input autoComplete='off' />
				</Form.Item>
				<Input.Group compact>
					<Form.Item
						style={{
							width: '50%'
						}}
						rules={[
							{
								required: true
							}
						]}
						name='months'
						label='Months'>
						<InputNumber
							style={{ width: '100%' }}
							autoComplete='off'
						/>
					</Form.Item>
					<Form.Item
						style={{
							width: '50%'
						}}
						rules={[
							{
								required: groupModal.type === 'create'
							}
						]}
						label='Direction'
						name='directionId'>
						<Select options={directions?.map(dir => ({ label: dir.name, value: dir.id }))} />
					</Form.Item>
				</Input.Group>

				<Button
					type='primary'
					htmlType='submit'>
					{groupModal.type.toUpperCase()}
				</Button>
			</Form>
		</Modal>
	)
}

export default CreateGroupModal
