import React from 'react'
import { Container } from '@chakra-ui/react'
import { DirectionList } from '@/entities'
import useGetDirections from '../model/useGetDirections'

const Directions = () => {
	useGetDirections()
	return (
		<Container maxW='container.xl'>
			<DirectionList />
		</Container>
	)
}

export default Directions
