import { Breadcrumb } from 'antd'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const BreadCrumb = () => {
	const { pathname } = useLocation()

	const path = pathname.split('/').filter(Boolean).slice(1)

	return (
		<Breadcrumb>
			<Breadcrumb.Item>Home</Breadcrumb.Item>
			{path.map(p => {
				return (
					<Breadcrumb.Item key={p}>
						<Link to={p}>{p}</Link>
					</Breadcrumb.Item>
				)
			})}
		</Breadcrumb>
	)
}

export default BreadCrumb
