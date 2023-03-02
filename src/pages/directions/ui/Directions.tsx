import React from 'react'
import { Container } from '@chakra-ui/react'
import { DirectionList, DirectionsHeader } from '@/entities'
import useGetDirections from '../model/useGetDirections'
import { DirectionsModal } from '@/entities/directions'

const Directions = () => {
	useGetDirections()
	return (
		<Container maxW='container.xl'>
			<DirectionsHeader />
			<DirectionList />
			<DirectionsModal />
		</Container>
	)
}

export default Directions
