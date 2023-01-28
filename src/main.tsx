import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RootProvider } from '@providers'
import 'antd/dist/reset.css'
import { store, verify } from '@store'

const rootContainer = document.getElementById('root') as HTMLElement

const root = createRoot(rootContainer)

store.dispatch(verify())

const app: JSX.Element = (
	<StrictMode>
		<RootProvider />
	</StrictMode>
)

root.render(app)