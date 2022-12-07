import fs from 'fs'

const legislatorsCsvTable = fs.readFileSync('./tables/legislators.csv', { encoding: 'utf8' })
const tableLines = legislatorsCsvTable.split('\n')

const tableConvertedIntoObject = tableLines.slice(1).map(line => {
    const values = line.split(',')
    return {
        id: values[0],
        name: values[1].slice(0, values[1].length - 1)
    }
})
console.log(tableConvertedIntoObject)