#!/usr/bin/env node

/**
 *
 * vite + vue
 *
 * @author bertram hugger <???>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const { startSever } = require('./utils/devServer');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	debug && log(flags);

	await startSever();
})();
