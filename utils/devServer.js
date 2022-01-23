const path = require('path');
const vite = require('vite');
const 

module.exports = async () => {
	const vueFile = path.join(process.cwd(), 'App.vue');

	const server = await vite.createServer({
		server: { port: 3000 }
	});
	server.listen();


};
