import { Breadcrumb } from 'antd'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const BreadCrumb = () => {
	const { pathname } = useLocation()

	const path = pathname.split('/').slice(2)

	return (
		<Breadcrumb>
			<Breadcrumb.Item>
				<Link to='/admin'>Home</Link>
			</Breadcrumb.Item>
			{path.map((p) => {
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
