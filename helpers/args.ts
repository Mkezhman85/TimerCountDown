
export function getArgs(args: any) {
	let nodePath: string = process.argv[0];
	let appPath: string = process.argv[1];
	let timer: number = Number(process.argv[2]);
	
	console.log("nodePath: " + nodePath);
	console.log("appPath: " + appPath);
	console.log('---------------------');
	return timer
}

export default { getArgs }