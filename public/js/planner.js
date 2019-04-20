'use strict'
document.querySelector('.btn-gettrips').addEventListener('click', () => {
  fetch('/trip-planner/api/list')
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw 'failed to load trip list'
      }
    })
    .then(data => {
    //   console.log(data)
      let tripsList = document.querySelector('.trips-list')
      tripsList.innerHTML = ''
      // itterate through all trips
      data.forEach(trip => {
        // create a new list
        let li = document.createElement('li')
        let liText = document.createTextNode(`${trip.name} to start on ${trip.date}. The trip's location is ${trip.location}`)

        let delButton = document.createElement('button')
        let btnText = document.createTextNode('del')
        delButton.appendChild(btnText)

        li.appendChild(liText)
        tripsList.appendChild(li)
        tripsList.appendChild(delButton)
      })
    })
    .catch(e => {
      alert(e)
    })
})
