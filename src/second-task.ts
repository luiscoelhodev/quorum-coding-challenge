/* 2. For every bill in the dataset, how many legislators supported the bill? How many legislators
opposed the bill? Who was the primary sponsor of the bill? */

import { convertToCSV } from './helpers/convert-to-csv'
import { billsObject, legislatorsObject, voteResultsObject, votesObject } from './table-objects'

const secondTaskObject = billsObject.map(bill => {
    let supportersCount = 0
    let opposersCount = 0
    let billsPrimarySponsor = 'Unknown'
    votesObject.map(vote => {
        if (vote.bill_id === bill.id) {
            voteResultsObject.map(voteResult => {
                if (vote.id === voteResult.vote_id) {
                    +voteResult.vote_type === 1 ? supportersCount += 1 : opposersCount += 1
                }
            })
        }
    })
    legislatorsObject.map(legislator => {
        if (legislator.id === bill.sponsor_id) {
            billsPrimarySponsor = legislator.name
        }
    })
    return {
        id: bill.id,
        title: bill.title,
        supporter_count: supportersCount,
        opposer_count: opposersCount,
        primary_sponsor: billsPrimarySponsor
    }
})

export const secondTaskCsv = convertToCSV(secondTaskObject)
