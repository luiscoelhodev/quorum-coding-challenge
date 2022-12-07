/* 1. For every legislator in the dataset, how many bills did the legislator support (voted for the bill)? 
How many bills did the legislator oppose? */

import { convertToCSV } from './helpers/convert-to-csv'
import { legislatorsObject, voteResultsObject } from './table-objects'

const firstTaskObject = legislatorsObject.map(legislator => {
    let legislatorSupportedBillsCount = 0
    let legislatorOpposedBillsCount = 0
    voteResultsObject.map(vote => {
        if (vote.legislator_id === legislator.id) {
            +vote.vote_type === 1 ? legislatorSupportedBillsCount += 1 : legislatorOpposedBillsCount += 1
        }
    })
    return {
        id: legislator.id,
        name: legislator.name,
        num_supported_bills: legislatorSupportedBillsCount,
        num_opposed_bills: legislatorOpposedBillsCount
    }
})

export const firstTaskCsv = convertToCSV(firstTaskObject)