import { useState } from 'react'
const useModalWithData = <T> () => {
	const [open, setOpen] = useState<boolean>(false)
	const [data, setData] = useState<T | null>(null)

	const openModal = () => setOpen(true)
	
	const closeModal = () => {
		setOpen(false)
		setData(null)
	}

	const openWithData = (data: T) => {
		setData(data)
		setOpen(true)
	}

	return {
		open, data, openModal, openWithData, closeModal
	}
}

export default useModalWithData
