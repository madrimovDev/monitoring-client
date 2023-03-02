import React from 'react'
import { Button, Divider, Flex, Heading } from '@chakra-ui/react'
import useDirectionsModal from '../model/useDirectionsModal'

const DirectionsHeader = () => {
	const openModal = useDirectionsModal(state => state.openModal)
	return (
		<>
			<Flex
				justify='space-between'
				align='center'
				pb='4'>
				<Heading
					as='h2'
					fontSize='2xl'>
					Directions
				</Heading>
				<Button
					colorScheme='blue'
					onClick={openModal}
					size='sm'>
					Create
				</Button>
			</Flex>
			<Divider mb='4' />
		</>
	)
}

export default DirectionsHeader
