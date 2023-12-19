import {test} from '@playwright/test'
import fs from 'fs'
import path from 'path'
import parse from 'csv-parse/sync'

const credData = parse.parse(fs.readFileSync(path.join(__dirname,'testData','cred.csv')),{
    columns:true,
    skip_empty_lines:true
})

test.only('Read csv data',async()=>{

    console.log(credData[0].username)
    console.log(credData[0].password)

    console.log(credData[1].username)
    console.log(credData[1].password)
})