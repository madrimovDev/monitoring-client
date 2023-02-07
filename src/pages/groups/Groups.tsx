/* eslint-disable prefer-const */
import React from 'react'
import { getAllGroups } from '@store'
import { useCacheDispatch } from '@hooks'
import { Outlet } from 'react-router-dom'

const Groups = () => {
	useCacheDispatch(getAllGroups, { groups: 10_000 })

	return <Outlet />
}

export default Groups
