"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToCSV = void 0;
function convertToCSV(arr) {
    const array = [Object.keys(arr[0])].concat(arr);
    return array.map(it => {
        return Object.values(it).toString();
    }).join('\n');
}
exports.convertToCSV = convertToCSV;
