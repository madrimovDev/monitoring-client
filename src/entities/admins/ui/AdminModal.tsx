import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay
} from '@chakra-ui/react'
import React, { FC } from 'react'
import AdminForm from './AdminForm'

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
					<AdminForm data={data} />
				</ModalBody>
				<ModalFooter />
			</ModalContent>
		</Modal>
	)
}

export default AdminModal
