'use strict'
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const tripRouter = require('./trip-routes')
const mainRoutes = require('./main-routes')

// app to use body-parser for JSON and urlencoded bodies
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// app to use following routers
app.use(mainRoutes)
app.use('/trip-planner', tripRouter)

// allow the use of static resources
app.use(express.static('public'))

// Attempts to  read the value of port from the environmental variabele PORT
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
