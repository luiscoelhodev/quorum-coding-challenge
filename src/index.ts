import fs from 'fs'
import { firstTaskCsv } from './first-task'
import { secondTaskCsv } from './second-task'

function runApp() {
    fs.writeFile('./legislators-support-oppose-count.csv', firstTaskCsv, "utf-8", (err) => {
        if (err) console.log(err)
        else console.log('First csv table was generated successfully!')
    })

    fs.writeFile('./bills.csv', secondTaskCsv, "utf-8", (err) => {
        if (err) console.log(err)
        else console.log('Second csv table was generated successfully!')
    })
}
runApp()