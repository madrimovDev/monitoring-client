import React, { useRef } from 'react'
import { Button, Card, Divider, Input, InputRef, Table } from 'antd'
import { useQuery } from 'react-query'
import { useParams, useSearchParams } from 'react-router-dom'
import { GroupService } from '@services'
import { useAppSelector } from '@store'

const Lesson = () => {
	const { groupId, lessonId } = useParams<{ groupId: string; lessonId: string }>()
	const permission = useAppSelector(state => state.user.data?.permissions[0])
	const scoreRef = useRef<InputRef>(null)
	const commentRef = useRef<InputRef>(null)

	const [searchParams] = useSearchParams()
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
		<Card title={searchParams.get('title')}>
			<Card
				loading={attetchments.isFetching}
				title='Attachments'>
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
			<Divider />
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
										readOnly={permission === 'admin'}
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
										readOnly={permission === 'admin'}
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
									disabled={permission === 'admin'}
									onClick={() => save(assessment.id)}
									type='primary'>
									Save
								</Button>
							)
						}
					}
				]}
			/>
		</Card>
	)
}

export default Lesson
