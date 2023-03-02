import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { LoginForm } from '@/entities'

const Login = () => {
	return (
		<Flex
			justify='center'
			align='center'
			w='full'
			minH='100vh'>
			<Text pos='fixed' bottom='5' pt='5' w='full' textAlign='center' borderTop='1px solid' borderColor='chakra-border-color'>
				© Verve Group {new Date().getFullYear()}
				<Text as='span'> | Uzbekistan</Text>
			</Text>
			<LoginForm />
		</Flex>
	)
}

export default Login
