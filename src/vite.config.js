import vue from '@vitejs/plugin-vue';
// import serverInfo from '../server.json';
import path from 'path';
export default {
	resolve: {
		alias: {
			'@': path.resolve(process.cwd(), 'App.vue')
		}
	},
	plugins: [vue()]
};
