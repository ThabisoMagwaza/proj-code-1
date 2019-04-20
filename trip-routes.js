const express = require('express')
const path = require('path')
const router = express.Router()
let tripsData = require('./data')

// console.log(tripsData.getTrips())
// console.log(tripsData.getTrip('Trip-3'))
// tripsData.addTrip('trip-5', 'date-5', 'location-5')
// console.log(tripsData.getTrips())
// tripsData.removeTrip('trip-2')
// console.log(tripsData.getTrips())

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'views', 'planner.html'))
})

router.get('/api/list', (req, res) => {
  // get from database
  const allTrips = tripsData.getTrips()

  res.json(allTrips)
})

router.post('/api/create', (req, res) => {
  console.log(`Creating trip ${req.body.tripname}`)
  // add to database
  tripsData.addTrip(req.body.tripname, req.body.tripdate, req.body.tripdescription)

  res.redirect('/trip-planner')
})

module.exports = router
