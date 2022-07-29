"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const args_js_1 = require("./helpers/args.js");
const update_countdown_js_1 = require("./update_countdown.js");
const initApp = () => {
    const args = (0, args_js_1.getArgs)(process.argv);
    (0, update_countdown_js_1.updateCountDown)(args);
};
initApp();
