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
import useDirectionsModal from '../model/useDirectionsModal'
import DirectionsForm from './DirectionsForm'

const AdminModal = () => {
	const { open, closeModal } = useDirectionsModal()
	return (
		<Modal
			isOpen={open}
			onClose={closeModal}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Directions</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<DirectionsForm />
				</ModalBody>
				<ModalFooter />
			</ModalContent>
		</Modal>
	)
}

export default AdminModal
