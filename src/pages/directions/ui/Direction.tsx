import { DirectionHeader, useDirection, DirectionGroups, DirectionTeachers } from '@/entities'
import { Container, Stack } from '@chakra-ui/react'
import React from 'react'

const Direction = () => {
	const { data } = useDirection().direction
	return (
		<Container maxW='container.xl'>
			<Stack
				spacing='10'>
				<DirectionHeader data={data?.direction} />
				<DirectionTeachers data={data?.direction.teachers} />
				<DirectionGroups data={data?.direction.groups} />
			</Stack>
		</Container>
	)
}

export default Direction
