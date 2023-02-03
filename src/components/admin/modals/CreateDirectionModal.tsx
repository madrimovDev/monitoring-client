import React, { useEffect, useLayoutEffect } from 'react'
import { closeModal, createDirection, updateDirection, useActionCreator, useAppSelector } from '@store'
import { Button, Form, Input, Modal, notification } from 'antd'

const CreateDirectionModal = () => {
	const directionModal = useAppSelector(state => state.modals.directionModal)

	const { message, status } = useAppSelector(state => state.directions)

	const [form] = Form.useForm()

	const actions = useActionCreator({
		closeModal,
		createDirection,
		updateDirection
	})

	const onSubmit = (e: Directions.NewDirection) => {
		if (directionModal.type === 'create') {
			actions.createDirection(e)
		} else if (directionModal.type === 'update' && directionModal.data) {
			actions.updateDirection({
				direction: e,
				id: directionModal.data.id
			})
		}
	}

	useEffect(() => {
		if (status === 'fulfilled' && directionModal.open) {
			notification.info({
				message: 'Admin Created'
			})
			return form.resetFields()
		}
		if (status === 'rejected' && directionModal.open) {
			return notification.error({
				message: message
			})
		}
	}, [status])

	useLayoutEffect(() => {
		if (directionModal.data) {
			// eslint-disable-next-line
			const data: any = directionModal.data
			const fields = Object.keys(data).map(key => {
				return {
					name: key,
					value: data[key]
				}
			})
			form.setFields(fields)
		}
	}, [directionModal.data])

	return (
		<Modal
			open={directionModal.open}
			onCancel={() => actions.closeModal()}
			footer={null}
			title={directionModal.type.toUpperCase() + ' ADMIN'}>
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
				<Button
					type='primary'
					htmlType='submit'>
					{directionModal.type.toUpperCase()}
				</Button>
			</Form>
		</Modal>
	)
}

export default CreateDirectionModal
