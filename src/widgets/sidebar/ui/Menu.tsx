import React, { FC, Key, ReactNode } from 'react'
import { Link, Stack, useColorModeValue } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { useCurrentPage } from '@/shared'

export interface DataSource {
	key: Key
	title: string
	icon?: ReactNode
	href: string
}

interface Props {
	dataSource: DataSource[]
}

const MenuItem: FC<{ data: DataSource }> = ({ data }) => {
	const path = useCurrentPage()
	const color = useColorModeValue('cyan.800', 'whiteAlpha.200')
	// const borderColor = useColorModeValue('cyan.400', 'blackAlpha.400')
	return (
		<Link
			px={4}
			py={2}
			color='white'
			display='flex'
			fontSize='sm'
			gap='2'
			alignItems='center'
			borderRightWidth={4}
			borderRightStyle='solid'
			borderRightColor={path === data.href || (!path && !data.href) ? 'cyan.400' : 'transparent'}
			bg={path === data.href || (!path && !data.href) ? color : 'transparent'}
			transition='0.5s'
			_hover={{
				textDecoration: 'none',
				bg: 'whiteAlpha.100'
			}}
			as={RouterLink}
			to={data.href}>
			{data.icon}
			{data.title}
		</Link>
	)
}

const Menu: FC<Props> = ({ dataSource }) => {
	return (
		<Stack spacing={0}>
			{dataSource.map(data => (
				<MenuItem
					key={data.key}
					data={data}
				/>
			))}
		</Stack>
	)
}

export default Menu
