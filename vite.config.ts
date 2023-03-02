import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const pathResolver = (dirName: string) => path.resolve(__dirname, 'src', dirName)

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': pathResolver('')
		}
	}
})
