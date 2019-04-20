// class Trip {
//   constructor (name, date, location) {
//     this.name = name
//     this.date = date
//     this.location = location
//   }

// }

// let trip1 = new Trip('Trip-1', 'date-1', 'location-1')
// let trip2 = new Trip('Trip-2', 'date-2', 'location-2')
// let trip3 = new Trip('Trip-3', 'date-3', 'location-3')
// let trip4 = new Trip('Trip-4', 'date-4', 'location-4')

let trip1 = {
  name: 'trip-1',
  date: 'date-1',
  location: 'location-1'
}

let trip2 = {
  name: 'trip-2',
  date: 'date-2',
  location: 'location-2'
}

let trip3 = {
  name: 'trip-3',
  date: 'date-3',
  location: 'location-3'
}
let trip4 = {
  name: 'trip-4',
  date: 'date-4',
  location: 'location-4'
}

let trips = [trip1, trip2, trip3, trip4]

module.exports = {
  addTrip: function (name, date, location) {
    let newTrip = {
      name: name,
      date: date,
      location: location
    }
    trips.push(newTrip)
    return newTrip
  },
  removeTrip: function (name) {
    const index = trips.findIndex(trip => trip.name.toLocaleLowerCase() === name.toLocaleLowerCase())
    if (index > -1) {
      let temp = trips[index]
      trips.splice(index, 1)
      return temp
    }
    return index
  },
  getTrip: function (name) {
    const index = trips.findIndex(trip => trip.name.toLocaleLowerCase() === name.toLocaleLowerCase())
    if (index > -1) {
      return trips[index]
    }
    return index
  },
  getTrips: function () {
    return trips
  }

}
