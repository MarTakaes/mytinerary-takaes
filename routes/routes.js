const citiesController = require ("../controllers/citiesControllers");

const Router = require("express").Router()

Router.route("/cities")
.get(citiesController.returnCities)

Router.route("/city/:id")
.get(citiesController)
module.exports = Router
