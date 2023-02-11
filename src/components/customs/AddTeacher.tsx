import { GroupsService } from '@services'
import { getAllGroups, getAllTeachers, useActionCreator, useAppSelector } from '@store'
import { Button, Form, FormInstance, Popconfirm, Select } from 'antd'
import React, { FC, forwardRef, useEffect, useState } from 'react'

interface AddTeacherFormProps {
	form: FormInstance
	teachers: Teachers.Teacher[]
}

type OptoinType = {
	label: string
	value: number
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AddTeacherForm = forwardRef<unknown, AddTeacherFormProps>(({ form, teachers }, ref) => {
	const [options, setOptions] = useState<OptoinType[]>(
		teachers.map(teacher => ({
			label: `${teacher.name} ${teacher.surname}`,
			value: teacher.id
		}))
	)

	const onSearch = (value: string) => {
		const a = teachers.filter(teacher => {
			if (teacher.name.includes(value) || teacher.surname.includes(value)) {
				return teacher
			}
		})

		setOptions(
			a.map(teacher => ({
				label: `${teacher.name} ${teacher.surname}`,
				value: teacher.id
			}))
		)
	}

	const onFocus = () => {
		setOptions(teachers.map(teacher => ({ label: `${teacher.name} ${teacher.surname}`, value: teacher.id })))
	}

	return (
		<Form
			style={{ width: 200 }}
			form={form}>
			<Form.Item name='teacherId'>
				<Select
					showSearch
					onSearch={onSearch}
					onFocus={onFocus}
					filterOption={false}
					notFoundContent={null}
					options={options}
				/>
			</Form.Item>
		</Form>
	)
})

AddTeacherForm.displayName = AddTeacherForm.name

interface Props {
	group: Groups.Group
}

const AddTeacher: FC<Props> = ({ group }) => {
	const teachers = useAppSelector(state => state.admin.teachers.data)
	const [open, setOpen] = useState(false)
	const [form] = Form.useForm()
	const actions = useActionCreator({
		getAllGroups,
		getAllTeachers
	})

	useEffect(() => {
		if (!teachers) {
			actions.getAllTeachers()
		}
	}, [])

	const onConfirm = async () => {
		setOpen(false)
		await GroupsService.addTeacherToGroup(group.id, form.getFieldValue('teacherId'))
		actions.getAllGroups()
		form.resetFields()
	}

	const onCancel = () => {
		form.resetFields()
		setOpen(false)
	}

	return (
		<Popconfirm
			onConfirm={onConfirm}
			open={open}
			onCancel={onCancel}
			title='Add Teacher'
			description={
				teachers && (
					<AddTeacherForm
						teachers={teachers}
						form={form}
					/>
				)
			}>
			<Button
				onClick={() => setOpen(true)}
				shape='circle'
				size='small'>
				+
			</Button>
		</Popconfirm>
	)
}

export default AddTeacher
