import fs from 'fs'

// Legislators

const legislatorsCsvTable = fs.readFileSync('./tables/legislators.csv', { encoding: 'utf8' })
const legislatorsTableLines = legislatorsCsvTable.split('\n')
const legislatorsObject = legislatorsTableLines.slice(1).map(line => {
    const values = line.split(',')
    return {
        id: values[0],
        name: values[1].replace(/\r/, '')
    }
})

// Bills

const billsCsvTable = fs.readFileSync('./tables/bills.csv', { encoding: "utf-8" })
const billsTableLines = billsCsvTable.split('\n')
const billsObject = billsTableLines.slice(1).map(line => {
    const values = line.split(',')
    return {
        id: values[0],
        title: values[1],
        sponsor_id: values[2].replace(/\r/, '')
    }
})

// Votes

const votesCsvTable = fs.readFileSync('./tables/votes.csv', { encoding: "utf-8" })
const votesTableLines = votesCsvTable.split('\n')
const votesObject = votesTableLines.slice(1).map(line => {
    const values = line.split(',')
    return {
        id: values[0],
        bill_id: values[1].replace(/\r/, '')
    }
})

// Vote_results

const voteResultsCsvTable = fs.readFileSync('./tables/vote_results.csv', { encoding: "utf-8" })
const voteResultsTableLines = voteResultsCsvTable.split('\n')
const voteResultsObject = voteResultsTableLines.slice(1).map(line => {
    const values = line.split(',')
    return {
        id: values[0],
        legislator_id: values[1],
        vote_id: values[2],
        vote_type: values[3].replace(/\r/, '')
    }
})

export { legislatorsObject, billsObject, votesObject, voteResultsObject }