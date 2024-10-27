import Icons from 'unplugin-icons/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [
		sveltekit(),
		Icons({
			compiler: 'svelte',
			autoInstall: true
		})
	],
	server: {
		proxy: {
			'/api': {
				target: `${process.env.VITE_BACKEND_SITE_URL}`,
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '/api')
			},
			'/admin': {
				target: `${process.env.VITE_BACKEND_SITE_URL}`,
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/admin/, '/admin')
			}
		}
	},
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['./test/setup-test-env.ts'],
		mockReset: true,
		coverage: {
			exclude: ['**/{mocks,__fixtures__,__tests__,coverage}/**', '**/types.ts']
		}
		// include: ['src/setup-test-env.ts']
		// include: ['src/**/*.{test,spec}.{js,ts,tsx}']
	}
});
