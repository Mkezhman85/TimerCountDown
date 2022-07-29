import { getArgs } from './helpers/args.js'
import { updateCountDown } from './update_countdown.js'

const initApp = () => {
	const args = getArgs(process.argv)
	updateCountDown(args)
}


initApp()