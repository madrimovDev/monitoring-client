import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

interface Props {
	sidebar: React.ReactNode
	header: React.ReactNode
	content: React.ReactNode
}

const Layout: React.FC<Props> = props => {
	return (
		<Flex
			h='100vh'
			overflow='hidden'>
			<Box
				h='full'
				minW={200}>
				{props.sidebar}
			</Box>
			<Box
				h='full'
				w='full'
				overflow={'auto'}>
				{props.header}
				<Box p={10}>{props.content}</Box>
			</Box>
		</Flex>
	)
}

export default Layout
