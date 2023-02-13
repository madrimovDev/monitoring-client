import React, { useRef } from 'react'
import { Button, Card, Input, InputRef, Table } from 'antd'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { GroupService } from '@services'

const Lesson = () => {
	const { groupId, lessonId } = useParams<{ groupId: string; lessonId: string }>()
	const scoreRef = useRef<InputRef>(null)
	const commentRef = useRef<InputRef>(null)

	const { data, isFetching, refetch } = useQuery('lesson/assets', {
		queryFn: async () => {
			return await GroupService.getLessonAssessments(groupId, lessonId)
		}
	})

	const attetchments = useQuery('lesson/attech', {
		queryFn: async () => {
			return await GroupService.getLessonAttechments(groupId, lessonId)
		}
	})

	const save = async (studentId: number) => {
		if (scoreRef.current?.input && commentRef.current?.input) {
			await GroupService.setLessonAssessments(groupId, lessonId, {
				id: studentId,
				comment: commentRef.current?.input?.value,
				score: scoreRef.current?.input?.value
			})
			refetch()
		}
	}

	return (
		<div>
			<Card
				loading={attetchments.isFetching}
				title='attachments'>
				{attetchments.data?.data && (
					<>
						{attetchments.data.data.attachments.map(item => {
							return (
								<Card.Grid key={item}>
									<Card.Meta title={item} />
									<a
										href={item}
										download>
										Download
									</a>
								</Card.Grid>
							)
						})}
					</>
				)}
			</Card>
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
							if (assessment) {
								return (
									<Input
										ref={scoreRef}
										type='number'
										defaultValue={assessment.score}
									/>
								)
							}
						}
					},
					{
						key: 'comment',
						title: 'Description',
						render(_, { assessment }) {
							if (assessment) {
								return (
									<Input
										ref={commentRef}
										defaultValue={assessment.comment}
									/>
								)
							}
						}
					},
					{
						key: 'save',
						title: 'Action',
						render(_, { assessment }) {
							return (
								<Button
									onClick={() => save(assessment.id)}
									type='primary'>
									Save
								</Button>
							)
						}
					}
				]}
			/>
		</div>
	)
}

export default Lesson
