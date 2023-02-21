import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import Menu from './Menu'
import menuItems from './module/menuItems'

const Sidebar = () => {
	return (
		<Flex
			flexDir='column'
			gap={3}
			h='full'
			bg='cyan.900'
			shadow='xl'
			p={4}>
			<Text
				color='white'
				fontWeight='bold'
				fontSize='xl'>
				LMS
			</Text>
			<Menu dataSource={menuItems}/>
		</Flex>
	)
}

export default Sidebar
