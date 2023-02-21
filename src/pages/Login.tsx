import React from 'react'
import { Flex } from '@chakra-ui/react'
import { LoginForm } from '@/entities'

const Login = () => {
	return (
		<Flex
			justify='center'
			align='center'
			w='full'
			minH='100vh'>
			<LoginForm />
		</Flex>
	)
}

export default Login
