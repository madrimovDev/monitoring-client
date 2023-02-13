import { GroupService } from '@services'
import { Input, InputRef, Table } from 'antd'
import React, { useRef, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

const Lesson = () => {
	const { groupId, lessonId } = useParams<{ groupId: string; lessonId: string }>()
	const scoreRef = useRef<InputRef>(null)
	const commentRef = useRef<InputRef>(null)
	const [debounce, setDebounce] = useState(false)
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
							return (
								<Input
									ref={scoreRef}
									type='number'
									defaultValue={assessment.score}
								/>
							)
						}
					},
					{
						key: 'comment',
						title: 'Description',
						render(_, { assessment }) {
							return (
								<Input
									ref={commentRef}
									defaultValue={assessment.comment}
								/>
							)
						}
					}
				]}
			/>
		</div>
	)
}

export default Lesson
