import { createAction } from '@reduxjs/toolkit'

export const createAdminModal = createAction('modal/createAdmin')
export const updateAdminModal = createAction('modal/updateAdmin', (data: Admin.Admin) => {
	return {
		payload: data
	}
})

export const createDirectionModal = createAction('modal/createDirection')
export const updateDirectionModal = createAction('modal/updateDirection', (data: Directions.Direction) => {
	return {
		payload: data
	}
})

export const createTeacherModal = createAction('modal/createTeacher')
export const updateTeacherModal = createAction('modal/updateTeacher', (data: Teachers.Teacher) => {
	return {
		payload: data
	}
})

export const closeModal = createAction('modal/closeModal')
