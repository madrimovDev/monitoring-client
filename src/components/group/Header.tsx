import React, { FC } from 'react'
import { GroupService } from '@services'
import { Button, Skeleton, Space, Typography } from 'antd'
import { useQuery } from 'react-query'
import CustomLink from '../customs/CustomLink'

const { Title, Paragraph } = Typography

interface Props {
	id: string
}

const Header: FC<Props> = ({ id }) => {
	const data = useQuery('group', {
		queryFn: async () => {
			return await Promise.all([GroupService.getGroup(id), GroupService.getGroupTeacher(id)]).then(res => {
				return {
					group: res[0].group,
					teacher: res[1].teacher
				}
			})
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
				<Button
					type='primary'
					size='small'
					danger>
					Delete Group
				</Button>
			</div>
			<Space.Compact
				direction='vertical'
				size='small'>
				<Paragraph>Months: {data.data?.group.months}</Paragraph>
				<Paragraph>Direction: {data.data?.group.directionId}</Paragraph>
				<Paragraph>
					Teacher:{' '}
					{data.data?.teacher ? (
						<CustomLink to={'teachers/' + data.data?.teacher.id}>
							{data.data?.teacher.name} {data.data?.teacher.surname}
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
