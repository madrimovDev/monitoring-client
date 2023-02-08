import { Popconfirm } from 'antd'
import React, { FC, MouseEvent, ReactNode, forwardRef, useEffect, useRef, useState } from 'react'

interface Props {
	children: React.ReactNode
}

const Children = forwardRef<HTMLSpanElement, { children: ReactNode }>(({ children }, ref) => {
	return <span ref={ref}>{children}</span>
})

Children.displayName = 'PopconfirmChildren'

const RemoveGroup: FC<Props> = ({ children }) => {
	const [open, setOpen] = useState(false)
	const ref = useRef<HTMLSpanElement>(null)
	const popRef = useRef<HTMLElement>(null)

	useEffect(() => {
		const listener = <T extends keyof HTMLElementEventMap>(event: HTMLElementEventMap[T]) => {
			if (!event.currentTarget) return

			const target = event.currentTarget as HTMLSpanElement

			if (target.contains(popRef.current)) {
				setOpen(true)
			}
		}

		ref.current?.addEventListener('mouseenter', listener)

		return () => {
			ref.current?.removeEventListener('mouseenter', listener)
		}
	}, [open])

	return (
		<Popconfirm
			ref={popRef}
			title='Remove Group'
			open={open}>
			<Children ref={ref}>{children}</Children>
		</Popconfirm>
	)
}

export default RemoveGroup
