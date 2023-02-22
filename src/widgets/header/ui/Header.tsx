import React, { FC, ReactNode } from 'react'
import { Flex, IconButton, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { useCurrentPage } from '@/shared'

interface Props {
	profile?: ReactNode
	theme?: boolean
	title?: string
}

const ChangeColorMode = () => {
	const Icon = useColorModeValue(MoonIcon, SunIcon)
	const {toggleColorMode} = useColorMode()
	return (
		<IconButton onClick={toggleColorMode} aria-label='theme' size='xs'>
			<Icon />
		</IconButton>
	)
}

const Header: FC<Props> = ({ profile, title, theme }) => {
	const path = useCurrentPage()
	return (
		<Flex
			bg='chakra-subtle-bg'
			py={3}
			px={4}
			align='center'
			shadow='md'
			pos='sticky'
			top={0}>
			<Text
				fontSize='xl'
				textTransform='capitalize'>
				{title || path || (!path && 'Dashboard')}
			</Text>
			<Flex
				flexGrow={1}
				align='center'
				gap={3}
				justify='flex-end'>
				{theme && <ChangeColorMode />}
				{profile}
			</Flex>
		</Flex>
	)
}

export default Header
