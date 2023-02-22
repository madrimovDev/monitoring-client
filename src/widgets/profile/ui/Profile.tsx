import React from 'react'
import { Menu, MenuButton, MenuList, MenuGroup, MenuItem, MenuDivider, Avatar } from '@chakra-ui/react'

const Profile = () => {
	return (
		<Menu>
			<MenuButton _hover={{cursor: 'pointer'}} as={Avatar} size='xs' />
			<MenuList>
				<MenuGroup title='Profile'>
					<MenuItem>My Account</MenuItem>
					<MenuItem>Payments </MenuItem>
				</MenuGroup>
				<MenuDivider />
				<MenuGroup title='Help'>
					<MenuItem>Docs</MenuItem>
					<MenuItem>FAQ</MenuItem>
				</MenuGroup>
			</MenuList>
		</Menu>
	)
}

export default Profile
