import React, { FormEvent, FormEventHandler } from 'react'
import { Box, Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'
import useAdminsModal from '../model/useAdminsModal'
import adminActions from '../model/adminActions'

const AdminForm = () => {
	const { modalData } = useAdminsModal()
	const { createAdmin, updateAdmin } = adminActions()

	const create = createAdmin()
	const update = updateAdmin()

	const submitHandler: FormEventHandler<HTMLDivElement> & FormEventHandler<HTMLFormElement> = event => {
		event.preventDefault()

		const formData = new FormData(event.currentTarget as HTMLFormElement)
		const data = Object.fromEntries(formData.entries())

		if (!modalData) {
			create.mutate(data as unknown as Admins.NewAdmin)
		} else {
			update.mutate({ id: modalData.id, ...(data as unknown as Admins.NewAdmin) })
		}
	}

	return (
		<Box
			onSubmit={submitHandler}
			as='form'>
			<Stack spacing={4}>
				<FormControl isRequired>
					<FormLabel>Name</FormLabel>
					<Input
						name='name'
						defaultValue={modalData?.name}
					/>
				</FormControl>
				<FormControl isRequired>
					<FormLabel>Username</FormLabel>
					<Input
						name='username'
						defaultValue={modalData?.username}
					/>
				</FormControl>
				<FormControl isRequired={!modalData}>
					<FormLabel>Password</FormLabel>
					<Input name='password' />
				</FormControl>
				<Button
					isLoading={create.isLoading || update.isLoading}
					type='submit'
					colorScheme='blue'>
					Create
				</Button>
			</Stack>
		</Box>
	)
}

export default AdminForm
