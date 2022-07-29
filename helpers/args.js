import chalk from 'chalk'

const getArgs = (args) => {
	let nodePath = process.argv[0];
	let appPath = process.argv[1];
	let timer = process.argv[2];
	
	console.log("nodePath: " + nodePath);
	console.log("appPath: " + appPath);
	console.log('---------------------');
	// console.log(chalk.bold("Длительность звонка: " + timer));
	return timer
}


export { getArgs }