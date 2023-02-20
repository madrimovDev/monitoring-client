import { userContext } from '@contexts'
import { useContext } from 'react'

const useUser = useContext(userContext)

export default useUser