import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(process.cwd(), 'App.vue')
		}
	},
	plugins: [vue()]
});
