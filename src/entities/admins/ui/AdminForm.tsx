import React from 'react'
import { Box, Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'
import useAdminsModal from '../model/useAdminsModal'

const AdminForm = () => {
	const { modalData } = useAdminsModal()
	return (
		<Box as='form'>
			<Stack spacing={4}>
				<FormControl isRequired>
					<FormLabel>Name</FormLabel>
					<Input defaultValue={modalData?.name} />
				</FormControl>
				<FormControl isRequired>
					<FormLabel>Username</FormLabel>
					<Input defaultValue={modalData?.username} />
				</FormControl>
				<FormControl isRequired={!modalData}>
					<FormLabel>Password</FormLabel>
					<Input />
				</FormControl>
				<Button colorScheme='blue'>Create</Button>
			</Stack>
		</Box>
	)
}

export default AdminForm
