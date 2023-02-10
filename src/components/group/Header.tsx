import React, { FC } from 'react'
import { GroupService } from '@services'
import { Button, Skeleton, Space, Typography } from 'antd'
import { useQuery } from 'react-query'
import CustomLink from '../customs/CustomLink'
import DeleteFilled from '@ant-design/icons/DeleteFilled'
import EditFilled from '@ant-design/icons/EditFilled'

const { Title, Paragraph } = Typography

interface Props {
	id: string
}

const Header: FC<Props> = ({ id }) => {
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
				<Space>
					<Button
						type='primary'
						size='small'
						icon={<EditFilled />}>
						Edit
					</Button>
					<Button
						type='default'
						size='small'
						danger
						icon={<DeleteFilled />}>
						Delete
					</Button>
				</Space>
			</div>
			<Space.Compact
				direction='vertical'
				size='small'>
				<Paragraph>Months: {data.data?.group.months}</Paragraph>
				<Paragraph>Direction: {data.data?.group.direction.name}</Paragraph>
				<Paragraph>
					Teacher:{' '}
					{data.data?.group.teacher ? (
						<CustomLink to={'teachers/' + data.data?.group.teacher.id}>
							{data.data?.group.teacher.name} {data.data?.group.teacher.surname}
						</CustomLink>
					) : (
						'No Teacher'
					)}
				</Paragraph>
			</Space.Compact>
		</>
	)
}

export default Header
