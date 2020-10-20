const express = require('express')
const app = express()
const bodyParser = require('body-parser')
 const ds=require('dotenv')
 ds.config({path:'resfapi/.env'})
const port = process.env.PORT || 3000
DB_HOST="localhost"
DB_USER="root"
DB_PASS=""
DB_NAME="nodejs_api"
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

let routes = require('./api/routes') //importing route
routes(app)

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
})

app.listen(port)

console.log('RESTful API server started on: ' + port)