const Router = require ('express').Router();
const citiesControllers = require ('../controllers/citiesControllers')
const itineraryControllers = require  ('../controllers/itineraryControllers')

Router.route('/cities')
.get(citiesControllers.returnCities)
.post(citiesControllers.createCity)

Router.route('/city/:id')
.get(citiesControllers.returnCity)
.post(citiesControllers.createCity)
.delete(citiesControllers.deleteCity)
.put(citiesControllers.modifyCity)

Router.route('/itinerary')
.get(itineraryControllers.returnItineraries)
.post(itineraryControllers.createItinerary)

Router.route('/itinerary/:id')
.get(itineraryControllers.returnItinerary)
.post(itineraryControllers.returnItinerary)
.delete(itineraryControllers.deleteItinerary)
.put(itineraryControllers.modifyItinerary)

Router.route("/itineraries/:city")
.get(itineraryControllers.returnItinerariesByCity)

// Router.route('/auth/signup')
// .post(authControllers.postUser)
// .get(authControllers.readUsers)

module.exports = Router