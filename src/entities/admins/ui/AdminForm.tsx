import { Box, Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'
import React, { FC } from 'react'

interface Props {
	data: Admins.Admin | null
}

const AdminForm: FC<Props> = ({ data }) => {
	return (
		<Box as='form'>
			<Stack spacing={4}>
				<FormControl isRequired>
					<FormLabel>Name</FormLabel>
					<Input defaultValue={data?.name} />
				</FormControl>
				<FormControl isRequired>
					<FormLabel>Username</FormLabel>
					<Input defaultValue={data?.username} />
				</FormControl>
				<FormControl isRequired={!data}>
					<FormLabel>Password</FormLabel>
					<Input />
				</FormControl>
				<Button colorScheme='blue'>Create</Button>
			</Stack>
		</Box>
	)
}

export default AdminForm
