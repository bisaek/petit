const path = require('path');
const fs = require('fs');
const vite = require('vite');
let vueFile;

exports.startSever = async () => {
	// write the vue file in server.json
	vueFile = path.join(process.cwd(), 'App.vue');
	fs.writeFile(
		path.join(__dirname, '../server.json'),
		JSON.stringify({
			file: vueFile
		}),
		function (err) {
			if (err) {
				return console.error(err);
			}
		}
	);

	//start the server
	console.log(vueFile);
	const server = await vite.createServer({
		server: { port: 3000 },
		root: path.join(__dirname, '../src'),
		configFile: path.join(__dirname, '../src/vite.config.js')
	});
	server.listen();
};
