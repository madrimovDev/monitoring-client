import React from 'react'
import { Flex } from '@chakra-ui/react'

const Header = () => {
	return (
		<Flex
			bg='blackAlpha.100'
			p={4}
			shadow='xl'>
			Header
			<Flex
				flexGrow={1}
				justify='flex-end'>
				Profile
			</Flex>
		</Flex>
	)
}

export default Header
