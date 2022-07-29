"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCountDown = void 0;
function updateCountDown(time) {
    console.log(`Установлено время звонка ${time}`);
    let intervalID = setInterval(() => {
        time--;
        console.log(`До окончания звонка осталось: ${time}`);
        if (time == 0) {
            clearInterval(intervalID);
            console.log('Окончание звонка');
        }
    }, 1000);
}
exports.updateCountDown = updateCountDown;
exports.default = { updateCountDown };
