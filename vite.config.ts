import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

const pathResolver = (dirName: string) => path.resolve(__dirname, 'src', dirName)

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@contexts': pathResolver('contexts'),
			'@components': pathResolver('components'),
			'@providers': pathResolver('providers'),
			'@services': pathResolver('services'),
			'@routers': pathResolver('routers'),
			'@pages': pathResolver('pages'),
			'@api': pathResolver('api'),
			'@store': pathResolver('store'),
			'@hooks': pathResolver('hooks'),
			'@utils': pathResolver('utils'),
			'@assets': pathResolver('assets')
		}
	}
})
