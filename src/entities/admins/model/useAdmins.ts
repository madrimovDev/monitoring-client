import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { Immutable } from 'immer'

type AdminsState = Immutable<{
	admins: Admins.Admin[]
	setAllAdmins: (admins: Admins.Admin[]) => void
	createAdmin: (admin: Admins.Admin) => void
}>

const useAdmins = create<AdminsState>()(
	immer(set => ({
		admins: [],
		createAdmin: admin =>
			set(state => {
				state.admins.push(admin)
			}),
		setAllAdmins: admins =>
			set(state => {
				state.admins = admins
			})
	}))
)

export default useAdmins