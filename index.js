const express = require('express');
const db = require('...')
const routes = require('..')

const currentWorkDir = process.cwd()

const PORT = 3002
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json)
app.use(routes);

db.once('open', ()=>{
    app.listen(PORT, ()=>{
        console.log(`API server of ABDULLA! is running on ${PORT}!! :'D`)
    })
})