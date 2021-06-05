require('dotenv').config()

const express = require('express')
const app = express()
const fs = require('fs')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const uuidv4 = require('uuid/v4')
const axios = require('axios')
const cvi= require ('./modules/cv')






app.use(bodyParser.json())


app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')



app.get('/', (req, res) => {
    res.render('home', {
        cv: cvi(),
    })
})


app.post('/action', (req, res) => {
    res.send('ok')
})

app.get('/download', (req, res) => {
    var filePath = "\\files\\Razvan_GRIGORAS_CV.pdf"
    fs.readFile(__dirname + filePath, function (err, data) {
        res.contentType("application/pdf")
        res.send(data)
    })
})

app.use(express.static('public'))

app.listen(process.env.PORT || 3000, function () {
    console.log("Listening on " + process.env.PORT + " or 3000")
})

