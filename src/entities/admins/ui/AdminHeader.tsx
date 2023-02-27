import React from 'react'
import { Button, Divider, Flex, Heading } from '@chakra-ui/react'
import useAdminsModal from '../model/useAdminsModal'

const AdminHeader = () => {
	const {openModal} = useAdminsModal()
	return (
		<>
			<Flex
				justify='space-between'
				align='center'
				pb='4'>
				<Heading
					as='h2'
					fontSize='2xl'>
					Admins
				</Heading>
				<Button
					onClick={openModal}
					size='sm'
					colorScheme='blue'>
					Create
				</Button>
			</Flex>
			<Divider mb='4'/>
		</>
	)
}

export default AdminHeader
