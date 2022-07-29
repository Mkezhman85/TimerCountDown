export function updateCountDown(time: number) {
	console.log(`Установлено время звонка ${time}`)
	let intervalID = setInterval(() => {
		time--	
		console.log(`До окончания звонка осталось: ${time}`)
			if (time == 0) {
				clearInterval(intervalID)
				console.log('Окончание звонка')
			}
		}, 1000);
}

export default { updateCountDown }