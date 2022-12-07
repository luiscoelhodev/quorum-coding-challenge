/* 1. For every legislator in the dataset, how many bills did the legislator support (voted for the bill)? 
How many bills did the legislator oppose? */

import fs from 'fs'
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

function convertToCSV(arr: any) {
    const array = [Object.keys(arr[0])].concat(arr)
  
    return array.map(it => {
      return Object.values(it).toString()
    }).join('\n')
}

fs.writeFileSync('./src/first-task.csv', convertToCSV(firstTaskObject), "utf-8")