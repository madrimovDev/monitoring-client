import React from 'react'
import { Container } from '@chakra-ui/react'
import { DirectionList, DirectionsHeader } from '@/entities'
import useGetDirections from '../model/useGetDirections'

const Directions = () => {
	useGetDirections()
	return (
		<Container maxW='container.xl'>
			<DirectionsHeader />
			<DirectionList />
		</Container>
	)
}

export default Directions
