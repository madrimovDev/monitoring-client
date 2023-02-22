import { useLocation } from 'react-router-dom'

const useCurrentPage = () => {
	const { pathname } = useLocation()
	const path = pathname.split('/')[2]
	
	return path
}
export default useCurrentPage
