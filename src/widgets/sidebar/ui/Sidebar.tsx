import React from 'react'
import { Flex, Text, useColorModeValue } from '@chakra-ui/react'
import Menu from './Menu'
import useMenuItems from './module/menuItems'

const Sidebar = () => {
	const color = useColorModeValue('cyan.900', 'chakra-subtle-bg')
	const menuItems = useMenuItems()
	return (
		<Flex
			flexDir='column'
			h='full'
			bg={color}
			shadow='xl'>
			<Text
				p={4}
				color='white'
				fontWeight='bold'
				fontSize='xl'>
				LMS
			</Text>
			<Menu dataSource={menuItems} />
		</Flex>
	)
}

export default Sidebar
