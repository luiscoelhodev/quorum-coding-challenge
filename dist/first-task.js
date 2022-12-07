"use strict";
/* 1. For every legislator in the dataset, how many bills did the legislator support (voted for the bill)?
How many bills did the legislator oppose? */
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstTaskCsv = void 0;
const convert_to_csv_1 = require("./helpers/convert-to-csv");
const table_objects_1 = require("./table-objects");
const firstTaskObject = table_objects_1.legislatorsObject.map(legislator => {
    let legislatorSupportedBillsCount = 0;
    let legislatorOpposedBillsCount = 0;
    table_objects_1.voteResultsObject.map(vote => {
        if (vote.legislator_id === legislator.id) {
            +vote.vote_type === 1 ? legislatorSupportedBillsCount += 1 : legislatorOpposedBillsCount += 1;
        }
    });
    return {
        id: legislator.id,
        name: legislator.name,
        num_supported_bills: legislatorSupportedBillsCount,
        num_opposed_bills: legislatorOpposedBillsCount
    };
});
exports.firstTaskCsv = (0, convert_to_csv_1.convertToCSV)(firstTaskObject);
