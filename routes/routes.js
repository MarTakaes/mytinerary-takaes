const citiesController = require ("../controllers/citiesControllers")
const itineraryController = require("../controllers/itineraryControllers")
const authControllers = require("../controllers/authControllers")
const activityControllers = require("../controllers/activityControllers")
const likesControllers = require("../controllers/likesControllers")
const validator = require("../config/validator")
const passport = require('../config/passport')
const commentControllers = require('../controllers/commentControllers')
const validatorComment = require("../config/validatorComment")

const Router = require("express").Router()

Router.route('/cities')
.get(citiesController.returnCities)
.post(citiesController.createCity)

Router.route('/city/:id')
.get(citiesController.returnCity)
.post(citiesController.createCity)
.delete(citiesController.deleteCity)
.put(citiesController.modifyCity)

Router.route('/itinerary')
.get(itineraryController.returnItineraries)
.post(itineraryController.createItinerary)

Router.route('/itinerary/:id')
.get(itineraryController.returnItinerary)
.post(itineraryController.returnItinerary)
.delete(itineraryController.deleteItinerary)
.put(itineraryController.modifyItinerary)

Router.route("/itineraries/:city")
.get(itineraryController.returnItinerariesByCity)

Router.route("/auth/signup")
.get(authControllers.readUsers)
.post(validator, authControllers.signUp)


Router.route("/auth/signin")
.post( authControllers.signIn) 

Router.route("/auth")
.get(passport.authenticate("jwt", {session: false}), authControllers.checkToken)

Router.route('/activities')
.post(activityControllers.postActivity)
.get(activityControllers.returnActivities)

Router.route('/activities/:id')
.get(activityControllers.returnActivity)
.put(activityControllers.modifyActivity)
.delete(activityControllers.deleteActivity)

Router.route("/activity/:itineraryId")
.get(activityControllers.returnActivitiesByItinerary) 

Router.route('/like').put(likesControllers.likes)

Router.route('/comments/:itineraryId')
.get(commentControllers.getComments)
.post(validatorComment, commentControllers.postComment) 

Router.route("/interaction/comments")
  .post(commentControllers.postComment)


Router.route('/comments')
.get(commentControllers.getAllComments)
.put(passport.authenticate("jwt", {session: false}), commentControllers.editComment) 

Router.route('/comments/:commentId')
.delete(passport.authenticate("jwt", {session: false}), commentControllers.deleteComment) 
module.exports = Router