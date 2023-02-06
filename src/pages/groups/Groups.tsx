/* eslint-disable prefer-const */
import React from 'react'
import { getAllGroups } from '@store'
import { useCacheDispatch } from '@hooks'

const Groups = () => {
	useCacheDispatch(getAllGroups, { groups: 10_000 })

	return <div>Groups</div>
}

export default Groups
