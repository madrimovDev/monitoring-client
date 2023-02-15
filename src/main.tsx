import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const rootContainer = document.getElementById('root') as HTMLElement

const root = createRoot(rootContainer)


const app: JSX.Element = (
	<StrictMode>
	</StrictMode>
)

root.render(app)
