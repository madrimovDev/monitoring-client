import React, { FormEvent, useCallback } from 'react'
import {
	Button,
	Card,
	CardBody,
	CardHeader,
	FormControl,
	FormHelperText,
	FormLabel,
	Heading,
	Input,
	Stack
} from '@chakra-ui/react'
import useLogin from '../model/useLogin'
import FormPassord from './FormPassord'
import useVerify from '../model/useVerify'

const Form = () => {
	const { mutate, isLoading } = useLogin()

	useVerify()

	const onSubmit = useCallback(() => {
		return (event: FormEvent<HTMLDivElement>) => {
			event.preventDefault()
			const formData = new FormData(event.currentTarget as unknown as HTMLFormElement)
			const data = Object.fromEntries(formData.entries())
			mutate(data as { username: string; password: string })
		}
	}, [])

	return (
		<Card
			as='form'
			shadow='xl'
			border='1px'
			borderStyle='solid'
			borderColor='chakra-border-color'
			minW='sm'
			onSubmit={onSubmit()}>
			<CardHeader>
				<Heading
					as='h4'
					fontSize='xl'>
					LMS
				</Heading>
			</CardHeader>
			<CardBody>
				<Stack gap={4}>
					<FormControl isRequired>
						<FormLabel>Username</FormLabel>
						<Input
							name='username'
							type='text'
						/>
						<FormHelperText>Username or Number</FormHelperText>
					</FormControl>
					<FormPassord />
					<Button
						isLoading={isLoading}
						colorScheme='blue'
						type='submit'
						variant='solid'>
						Login
					</Button>
				</Stack>
			</CardBody>
		</Card>
	)
}

export default Form
