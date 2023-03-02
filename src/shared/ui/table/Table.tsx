import React, { FC, PropsWithChildren } from 'react'
import Table from 'rc-table'
import { Table as ChTable, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import { ColumnsType } from 'rc-table/lib/interface'

interface TableProp<T> {
	dataSource: T[] | undefined
	columns: ColumnsType<T>
	caption: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TableType = <RecordType extends Record<string, any>>(tableProps: TableProp<RecordType>) => JSX.Element

const Theading: FC<PropsWithChildren> = ({ children }) => {
	const hasNum = (children as Array<unknown>)[1] === '#'
	const hasEmpty = (children as Array<unknown>)[1] === undefined

	return (
		<Th
			width={hasNum && !hasEmpty ? 15 : !hasNum && hasEmpty ? 40 : undefined}
			borderLeftWidth={1}
			borderRightWidth={1}
			borderLeftColor='chakra-border-color'
			borderRightColor='chakra-border-color'>
			{children}
		</Th>
	)
}

const TCell: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Td
			borderLeftWidth={1}
			borderRightWidth={1}
			borderLeftColor='chakra-border-color'
			borderRightColor='chakra-border-color'>
			{children}
		</Td>
	)
}

const TBodyRow: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Tr
			_hover={{
				background: 'blackAlpha.100'
			}}>
			{children}
		</Tr>
	)
}

const THeadRow: FC<PropsWithChildren> = ({ children }) => {
	return <Thead bg='chakra-subtle-bg'>{children}</Thead>
}

// eslint-disable-next-line react/prop-types
const Tables: TableType = ({ dataSource, columns, caption }) => {
	return (
		<Table
			data={dataSource}
			rowKey={d => d.id}
			footer={() => {
				return (
					<Text
						textAlign='center'
						py='4'
						border='1px'
						borderColor='chakra-border-color'
						borderTop='none'>
						{caption}
					</Text>
				)
			}}
			components={{
				table: ChTable,
				header: {
					wrapper: THeadRow,
					row: Tr,
					cell: Theading
				},
				body: {
					wrapper: Tbody,
					row: TBodyRow,
					cell: TCell
				}
			}}
			columns={columns}
		/>
	)
}

export default Tables
