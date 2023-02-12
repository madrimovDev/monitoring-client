import { GroupService } from '@services'
import { Table } from 'antd'
import React from 'react'
import { useMutation, useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

const Lesson = () => {
	const { groupId, lessonId } = useParams<{ groupId: string; lessonId: string }>()

	const { data, isFetching } = useQuery('lesson/assets', {
		queryFn: async () => {
			return await GroupService.getLessonAssessments(groupId, lessonId)
		}
	})

	return (
		<div>
			<Table
				loading={isFetching}
				dataSource={data?.data.assessments}
				rowKey={d => d.id}
				columns={[
					{
						key: '#',
						title: '#',
						render(_, record, index) {
							return index + 1
						}
					},
					{
						key: 'name',
						title: 'Name',
						render(_, { name }) {
							return name
						}
					},
					{
						key: 'score',
						title: 'Score',
						render(_, { assessment }) {
							return assessment.score + 1
						}
					}
				]}
			/>
		</div>
	)
}

export default Lesson
