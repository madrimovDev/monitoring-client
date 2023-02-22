import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React, { FC } from 'react'

interface Props {
	open: boolean
	data: Admins.Admin | null
	closeModal: () => void
}

const AdminModal: FC<Props> = ({ open, closeModal, data }) => {
	
	return (
		<Modal
			isOpen={open}
			onClose={closeModal}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Admin</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					{data ? 'data bor' : 'data yoq'}
				</ModalBody>
			</ModalContent>
		</Modal>
	)
}

export default AdminModal
