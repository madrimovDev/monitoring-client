import React from 'react'
import { Box, Spinner as ChSpinner } from '@chakra-ui/react'

const Spinner = () => {
	return (
		<Box>
			<ChSpinner
				thickness='4px'
				speed='0.65s'
				emptyColor='gray.200'
				color='blue.500'
				size='xl'
			/>
		</Box>
	)
}

export default Spinner
