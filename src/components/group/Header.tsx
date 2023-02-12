import React, { FC } from 'react'
import { GroupService } from '@services'
import { Skeleton, Space, Typography } from 'antd'
import { UseQueryResult, useQuery } from 'react-query'
import CustomLink from '../customs/CustomLink'
import Actions from './Actions'
import { useAppSelector } from '@store'

const { Title, Paragraph } = Typography

interface TeacherProps {
	permission: string | undefined
	data: UseQueryResult<Group.GroupResponse, unknown>
}

const Teacher: FC<TeacherProps> = ({ data, permission }) => {
	if (!data) return null
	if (permission === 'admin') {
		return (
			<CustomLink to={'teachers/' + data.data?.group?.teacher?.id}>
				{data.data?.group?.teacher?.name} {data.data?.group?.teacher?.surname}
			</CustomLink>
		)
	}
	if (permission === 'teacher') {
		return (
			<strong>
				{data.data?.group?.teacher?.name} {data.data?.group?.teacher?.surname}
			</strong>
		)
	}
	return null
}

interface Props {
	id: string
}

const Header: FC<Props> = ({ id }) => {
	const permission = useAppSelector(state => state.user.data?.permissions[0])
	const data = useQuery('group', {
		queryFn: async () => {
			return await GroupService.getGroup(id)
		}
	})

	if (data.isFetching) {
		return (
			<Skeleton
				title
				paragraph={{ rows: 3 }}
			/>
		)
	}

	return (
		<>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<Title level={3}>Name: {data.data?.group.name}</Title>
				<Actions />
			</div>
			<Space.Compact
				direction='vertical'
				size='small'>
				<Paragraph>
					Months: <strong>{data.data?.group.months}</strong>
				</Paragraph>
				<Paragraph>
					Direction: <strong>{data.data?.group.direction.name}</strong>
				</Paragraph>
				<Paragraph>
					Teacher:{' '}
					{data.data?.group.teacher ? (
						<Teacher
							data={data}
							permission={permission}
						/>
					) : (
						'No Teacher'
					)}
				</Paragraph>
			</Space.Compact>
		</>
	)
}

export default Header
