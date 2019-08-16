#!/usr/bin/env node

const index = require('../index');

const VERSION = '1.0.0';

const [ bin, sourcePath, ...args ] = process.argv;

const main = () => {
	const help = `
		Geny
		Generate something
		
		Usage:
		-h -help | show help
		-version | show version
	`;
	
	if (args.length <= 0) {
		console.log(help);
		process.exit(0);
	}

	if (args[0] === '-h' || args[0] === '-help') {
		console.log(help);
		process.exit(0);
	}

	if (args[0] === '-version') {
		console.log(index.giveColor(`geny version ${VERSION}`, 'red'));
		process.exit(0);
	}

	const geny = new index.Geny({argOne: args[0]});
	geny.exec();
		
};

main();
