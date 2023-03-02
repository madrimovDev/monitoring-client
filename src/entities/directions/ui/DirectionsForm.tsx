import React, { FormEventHandler } from 'react'
import { Box, Button, FormControl, Input, Stack } from '@chakra-ui/react'
import useDirectionsModal from '../model/useDirectionsModal'
import directionsActions from '../model/directionsActions'

const DirectionsForm = () => {
	const modalData = useDirectionsModal(state => state.modalData)
	const { createDirection, updateDirection } = directionsActions()

	const create = createDirection()
	const update = updateDirection()

	const submitHandler: FormEventHandler<HTMLDivElement> & FormEventHandler<HTMLFormElement> = event => {
		event.preventDefault()
		const formData = new FormData(event.currentTarget as HTMLFormElement)
		const data = Object.fromEntries(formData.entries())

		if (!modalData) {
			create.mutate(data['name'] as string)
		} else {
			update.mutate({
				direction: data as unknown as Directions.Direction,
				id: modalData.id
			})
		}
	}
	return (
		<Box
			as='form'
			onSubmit={submitHandler}>
			<Stack spacing={4}>
				<FormControl isRequired>
					<Input
						name='name'
						defaultValue={modalData?.name}
					/>
				</FormControl>
				<Button
					colorScheme='blue'
					type='submit'>
					Create
				</Button>
			</Stack>
		</Box>
	)
}

export default DirectionsForm
