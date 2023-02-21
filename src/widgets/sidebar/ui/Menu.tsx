import React, { FC, Key, ReactElement } from 'react'
import { Link, Stack } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

export interface DataSource {
	key: Key
	title: string
	icon?: ReactElement
	href: string
}

interface Props {
	dataSource: DataSource[]
}

const MenuItem: FC<{ data: DataSource }> = ({ data }) => {
	return (
		<Link
			px={4}
			py={2}
			color={'white'}
			display='flex'
			gap='2'
			alignItems='center'
			bg={data.title === 'Home' ? 'whiteAlpha.300' : 'transparent'}
			_hover={{
				textDecoration: 'none',
				bg: 'whiteAlpha.200'
			}}
			rounded='md'
			as={RouterLink}
			to={data.href}>
			{data.icon && data.icon}
			{data.title}
		</Link>
	)
}

const Menu: FC<Props> = ({ dataSource }) => {
	return (
		<Stack>
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
