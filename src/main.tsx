import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/app'

const rootContainer = document.getElementById('root') as HTMLElement

const root = createRoot(rootContainer)

const app: JSX.Element = (
	<StrictMode>
		<App />
	</StrictMode>
)

root.render(app)
