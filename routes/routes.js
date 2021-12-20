const Router = require ('express').Router();
const citiesControllers = require ('../controllers/citiesControllers')
const itineraryControllers = require  ('../controllers/itineraryControllers')
const authControllers = require("../controllers/authControllers");
const validator = require("../config/validator")
const passport = require('../config/passport')

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

Router.route("/auth/SignUp")
.get(authControllers.getUsers)
.post(validator,authControllers.saveUser)
.put(authControllers.modifyUser)
Router.route("/auth/SignIn")
.post(authControllers.signIn)

Router.route("/auth/user")
.get(passport.authenticate('jwt',{session:false}), authControllers.authUser)

Router.route("/countries")
.get(authControllers.getCountries)
.post(authControllers.uploadCountries);

module.exports = Router