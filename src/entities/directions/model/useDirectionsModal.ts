import { create } from 'zustand'

interface DirectionsModal {
	open: boolean
	openModal: () => void
	closeModal: () => void
	openWithData: (admin: Directions.Direction) => void
	modalData?: Directions.Direction
}

const useDirectionsModal = create<DirectionsModal>(set => {
	return {
		open: false,
		closeModal: () =>
			set(state => ({
				...state,
				modalData: undefined,
				open: false
			})),
		openWithData: direction =>
			set(state => ({
				...state,
				open: true,
				modalData: direction
			})),
		openModal: () =>
			set(state => ({
				...state,
				open: true
			}))
	}
})

export default useDirectionsModal
