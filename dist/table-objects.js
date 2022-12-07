"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.voteResultsObject = exports.votesObject = exports.billsObject = exports.legislatorsObject = void 0;
const fs_1 = __importDefault(require("fs"));
// Legislators
const legislatorsCsvTable = fs_1.default.readFileSync('./assets/legislators.csv', { encoding: 'utf8' });
const legislatorsTableLines = legislatorsCsvTable.split('\n');
const legislatorsObject = legislatorsTableLines.slice(1).map(line => {
    const values = line.split(',');
    return {
        id: values[0],
        name: values[1].replace(/\r/, '')
    };
});
exports.legislatorsObject = legislatorsObject;
// Bills
const billsCsvTable = fs_1.default.readFileSync('./assets/bills.csv', { encoding: "utf-8" });
const billsTableLines = billsCsvTable.split('\n');
const billsObject = billsTableLines.slice(1).map(line => {
    const values = line.split(',');
    return {
        id: values[0],
        title: values[1],
        sponsor_id: values[2].replace(/\r/, '')
    };
});
exports.billsObject = billsObject;
// Votes
const votesCsvTable = fs_1.default.readFileSync('./assets/votes.csv', { encoding: "utf-8" });
const votesTableLines = votesCsvTable.split('\n');
const votesObject = votesTableLines.slice(1).map(line => {
    const values = line.split(',');
    return {
        id: values[0],
        bill_id: values[1].replace(/\r/, '')
    };
});
exports.votesObject = votesObject;
// Vote_results
const voteResultsCsvTable = fs_1.default.readFileSync('./assets/vote_results.csv', { encoding: "utf-8" });
const voteResultsTableLines = voteResultsCsvTable.split('\n');
const voteResultsObject = voteResultsTableLines.slice(1).map(line => {
    const values = line.split(',');
    return {
        id: values[0],
        legislator_id: values[1],
        vote_id: values[2],
        vote_type: values[3].replace(/\r/, '')
    };
});
exports.voteResultsObject = voteResultsObject;
