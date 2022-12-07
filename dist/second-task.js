"use strict";
/* 2. For every bill in the dataset, how many legislators supported the bill? How many legislators
opposed the bill? Who was the primary sponsor of the bill? */
Object.defineProperty(exports, "__esModule", { value: true });
exports.secondTaskCsv = void 0;
const convert_to_csv_1 = require("./helpers/convert-to-csv");
const table_objects_1 = require("./table-objects");
const secondTaskObject = table_objects_1.billsObject.map(bill => {
    let supportersCount = 0;
    let opposersCount = 0;
    let billsPrimarySponsor = 'Unknown';
    table_objects_1.votesObject.map(vote => {
        if (vote.bill_id === bill.id) {
            table_objects_1.voteResultsObject.map(voteResult => {
                if (vote.id === voteResult.vote_id) {
                    +voteResult.vote_type === 1 ? supportersCount += 1 : opposersCount += 1;
                }
            });
        }
    });
    table_objects_1.legislatorsObject.map(legislator => {
        if (legislator.id === bill.sponsor_id) {
            billsPrimarySponsor = legislator.name;
        }
    });
    return {
        id: bill.id,
        title: bill.title,
        supporter_count: supportersCount,
        opposer_count: opposersCount,
        primary_sponsor: billsPrimarySponsor
    };
});
exports.secondTaskCsv = (0, convert_to_csv_1.convertToCSV)(secondTaskObject);
