import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const useVerify = () => {
	const user = window.localStorage.getItem('username')
	const permissions = window.localStorage.getItem('permissions')
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
