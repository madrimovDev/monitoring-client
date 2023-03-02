import React from 'react'
import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay
} from '@chakra-ui/react'
import useAdminsModal from '../model/useAdminsModal'
import AdminForm from './AdminForm'

const AdminModal = () => {
	const { open, closeModal } = useAdminsModal()
	return (
		<Modal
			isOpen={open}
			onClose={closeModal}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Admin</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<AdminForm />
				</ModalBody>
				<ModalFooter />
			</ModalContent>
		</Modal>
	)
}

export default AdminModal
