import { create } from 'zustand'

interface AdminsModal {
	open: boolean
	openModal: () => void
	closeModal: () => void
	openWithData: (admin: Admins.Admin) => void
	modalData?: Admins.Admin
}

const useAdminsModal = create<AdminsModal>(set => {
	return {
		open: false,
		closeModal: () =>
			set(state => ({
				...state,
				open: false
			})),
		openWithData: admin =>
			set(state => ({
				...state,
				open: true,
				modalData: admin
			})),
		openModal: () =>
			set(state => ({
				...state,
				open: true
			}))
	}
})

export default useAdminsModal