import React, { useEffect, forwardRef, useState, FC } from 'react'
import { getAllGroups, getAllStudents, useActionCreator, useAppSelector } from '@store'
import { Button, Form, Popconfirm, Select, FormInstance, Tooltip } from 'antd'
import { GroupsService } from '@services'

interface AddGroupFormType {
	form: FormInstance
	groups: Groups.Group[]
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AddGroupForm = forwardRef(({ form, groups }: AddGroupFormType, ref) => {
	const [options, setOptions] = useState<{ label: string; value: number }[]>(
		groups.map(group => ({ label: group.name, value: group.id }))
	)

	const [value, setValue] = useState<string>('')

	const onSearch = (value: string) => {
		const a = groups.filter(group => {
			if (group.name.includes(value)) {
				return group
			}
		})

		setOptions(
			a.map(group => ({
				label: group.name,
				value: group.id
			}))
		)
	}

	const handleChange = (newValue: string) => {
		setValue(newValue)
	}

	const onfocus = () => {
		setOptions(groups.map(group => ({ label: group.name, value: group.id })))
	}

	return (
		<Form
			form={form}
			style={{ width: 200 }}>
			<Form.Item name='group'>
				<Select
					value={value}
					showSearch
					filterOption={false}
					onChange={handleChange}
					onFocus={onfocus}
					notFoundContent={null}
					onSearch={onSearch}
					options={options}
				/>
			</Form.Item>
		</Form>
	)
})
AddGroupForm.displayName = 'AddGroupForm'

interface AddGroupProps {
	student: Students.Student
}

const AddGroup: FC<AddGroupProps> = ({ student }) => {
	const [form] = Form.useForm<{ groups: number }>()
	const [open, setOpen] = useState(false)
	const groups = useAppSelector(state => state.groups.data)

	const actions = useActionCreator({
		getAllGroups,
		getAllStudents
	})

	const onConfigm = async () => {
		setOpen(false)
		await GroupsService.addStudentToGroup(form.getFieldValue('group'), student.id)
		actions.getAllStudents()
		form.resetFields()
	}
	const onCancel = () => {
		form.resetFields()
		setOpen(false)
	}

	useEffect(() => {
		if (!groups) {
			actions.getAllGroups()
		}
	}, [])

	if (!groups) return null

	return (
		<Popconfirm
			style={{ width: 300 }}
			title='Add Group'
			description={
				<AddGroupForm
					groups={groups}
					form={form}
				/>
			}
			open={open}
			okText={'Add Group'}
			onCancel={onCancel}
			onConfirm={onConfigm}>
			<Tooltip title='Add Group'>
				<Button
					type='default'
					size='small'
					shape='circle'
					onClick={() => setOpen(true)}>
					+
				</Button>
			</Tooltip>
		</Popconfirm>
	)
}

export default AddGroup
