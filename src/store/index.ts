export { default as store } from './store'
export { default as useAppDispatch } from './hooks/useAppDispatch'
export { default as useAppSelector } from './hooks/useAppSelector'
export { default as useActionCreator } from './hooks/useActionCreator'
export type { BoundAsyncThunk } from './hooks/useActionCreator'
export { login, verify, logout } from './reducers/auth/actions'
export { getStatistics } from './reducers/dashboard/actions'
export { getAllAdmins, createAdmin, deleteAdmin, updateAdmin } from './reducers/admins/actions'
export {
	createAdminModal,
	closeModal,
	updateAdminModal,
	createDirectionModal,
	updateDirectionModal,
	createTeacherModal,
	updateTeacherModal
} from './reducers/modals/actions'
export { createDirection, deleteDirection, getAllDirections, updateDirection } from './reducers/directions/actions'
export { getAllTeachers, createTeacher, deleteTeacher, updateTeacher } from './reducers/teachers/actions'
export { getAllGroups, createGroup, deleteGroup, updateGroup } from './reducers/groups/actions'
