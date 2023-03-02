import React, { FC } from 'react'
import { Button, Divider, Flex, HStack, Stack, Text } from '@chakra-ui/react'

interface Props {
	data?: Direction.Direction
}

const DirectionHeader: FC<Props> = ({ data }) => {
	return (
		<Flex justify='space-between'>
			<Stack>
				<Text
					fontSize='xl'
					color='chakra-placeholder-color'>
					Direction:{' '}
					<Text
						color='chakra-body-text'
						as='span'
						textTransform='capitalize'>
						{data?.name}
					</Text>
				</Text>
				<Text
					fontSize='xl'
					color='chakra-placeholder-color'>
					Status:{' '}
					<Text
						as='span'
						color='chakra-body-text'
						textTransform='capitalize'>
						{data?.status}
					</Text>
				</Text>
			</Stack>
			<HStack>
				<Button
					colorScheme='red'
					size='sm'>
					Delete
				</Button>
			</HStack>
		</Flex>
	)
}

export default DirectionHeader
