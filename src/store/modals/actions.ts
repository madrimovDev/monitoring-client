import { createAction } from '@reduxjs/toolkit'

export const createAdminModal = createAction('modal/createAdmin')
export const updateAdminModal = createAction('modal/updateAdmin', (data: Admin.Admin) => {
	return {
		payload: data
	}
})
export const closeModal = createAction('modal/closeModal')
