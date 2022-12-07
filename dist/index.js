"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const first_task_1 = require("./first-task");
const second_task_1 = require("./second-task");
function runApp() {
    fs_1.default.writeFile('./legislators-support-oppose-count.csv', first_task_1.firstTaskCsv, "utf-8", (err) => {
        if (err)
            console.log(err);
        else
            console.log('First csv table was generated successfully!');
    });
    fs_1.default.writeFile('./bills.csv', second_task_1.secondTaskCsv, "utf-8", (err) => {
        if (err)
            console.log(err);
        else
            console.log('Second csv table was generated successfully!');
    });
}
runApp();
