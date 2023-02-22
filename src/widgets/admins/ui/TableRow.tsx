import React, { FC } from 'react'
import { HStack, IconButton, Td, Tr } from '@chakra-ui/react'
import EditFilled from '@ant-design/icons/EditFilled'
import DeleteFilled from '@ant-design/icons/DeleteFilled'

interface Props {
	edit: (data: Admins.Admin) => void
	admin: Admins.Admin
	index: number
}

const TableRow: FC<Props> = ({ admin, index, edit }) => {
	return (
		<Tr>
			<Td>{index + 1}</Td>
			<Td>{admin.name}</Td>
			<Td>{admin.username}</Td>
			<Td
				as={HStack}
				spacing='1'>
				<IconButton
					aria-label='edit'
					colorScheme='green'
					size='xs'
					onClick={() => edit(admin)}
					icon={<EditFilled />}
				/>
				<IconButton
					colorScheme='red'
					size='xs'
					aria-label='delete'
					icon={<DeleteFilled />}
				/>
			</Td>
		</Tr>
	)
}

export default TableRow
