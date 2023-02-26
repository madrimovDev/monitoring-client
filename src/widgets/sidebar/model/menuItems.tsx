import { sessionStorage } from '@/shared'
import { DataSource } from '../ui/Menu'
import adminMenuItems from './adminMenuItems'

const useMenuItems = (): DataSource[] => {
	const permissions = sessionStorage.get('permissions')
	const permission = permissions ? JSON.parse(permissions)[0] : null
	console.log(sessionStorage.get('username'))
	
	if (permission === 'admin') {
		return adminMenuItems
	}
	return []
}

export default useMenuItems
