import { sessionStorage } from '@/shared'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const useVerify = () => {
	const user = sessionStorage.get('username')
	const permissions = sessionStorage.get('permissions')
	const navigate = useNavigate()

	useEffect(() => {
		if (user && permissions) {
			navigate('/', {
				replace: true
			})
		}
	}, [])
}
export default useVerify
