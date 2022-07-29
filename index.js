import { getArgs } from './helpers/args.js'
import clalk from 'chalk'
import chalk from 'chalk';

function updateCountDown(time) {
	console.log(chalk.bold(chalk.bgGray(`Установлено время звонка ${time}`)))
	let intervalID = setInterval(() => {
		time--	
		console.log(`До окончания звонка осталось: ${time}`)
			if (time == 0) {
				clearInterval(intervalID)
				console.log(chalk.bgRed('Окончание звонка'))
			}
		}, 1000);

}

const initApp = () => {
	const args = getArgs(process.argv)
	updateCountDown(args)
}


initApp()