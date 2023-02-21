import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

interface Props {
	sidebar: React.ReactNode
	header: React.ReactNode
	content: React.ReactNode
}

const Layout: React.FC<Props> = props => {
	return (
		<Flex h='100vh'>
			<Box
				h='full'
				minW={200}>
				{props.sidebar}
			</Box>
			<Box
				h='full'
				w='full'>
				{props.header}
				{props.content}
			</Box>
		</Flex>
	)
}

export default Layout
