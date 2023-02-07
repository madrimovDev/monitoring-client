import React, { useMemo } from 'react'
import { useAppSelector } from '@store'
import { Link } from 'react-router-dom'

interface CustomLinkType {
	to: string
	children: React.ReactNode
}

const CustomLink: React.FC<CustomLinkType> = ({ to, children }) => {
	const permission = useAppSelector(state => state.user.data?.permissions[0])

	const path = useMemo(() => {
		return `/${permission}/${to}`
	}, [permission])

	return <Link to={path}>{children}</Link>
}

export default CustomLink
