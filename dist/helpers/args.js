"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArgs = void 0;
function getArgs(args) {
    let nodePath = process.argv[0];
    let appPath = process.argv[1];
    let timer = Number(process.argv[2]);
    console.log("nodePath: " + nodePath);
    console.log("appPath: " + appPath);
    console.log('---------------------');
    return timer;
}
exports.getArgs = getArgs;
exports.default = { getArgs };
