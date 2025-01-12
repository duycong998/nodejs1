const express = require('express')
//const { hostname } = require('os')
const path = require('path')
require('dotenv').config()

const app = express()

const port = process.env.PORT || 8888
 const hostname = process.env.HOSTNAME
var a = '{I am duycong }'


app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/hello', (req, res) => {
    res.send(a)
})

app.get('/hi', (req, res) => {

    res.render('sample.ejs')
    // res.send('<h1> cong deptrai </h1>')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})