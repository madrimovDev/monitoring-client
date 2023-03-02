import { Header } from '@/widgets/header'
import { Sidebar } from '@/widgets/sidebar'
import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

interface Props {
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
				<Sidebar />
			</Box>
			<Box
				h='full'
				w='full'
				overflow={'auto'}>
				<Header theme/>
				<Box p={10}>{props.content}</Box>
			</Box>
		</Flex>
	)
}

export default Layout
