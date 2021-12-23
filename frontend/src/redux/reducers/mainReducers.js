import {combineReducers} from "redux"
import citiesReducer from "./citiesReducer"
import itinerariesReducer from "./itinerariesReducer"
import authReducer from "./authReducer"
import activityReducer from "./activityReducer"


const mainReducer = combineReducers({
    citiesReducer: citiesReducer,
    itinerariesReducer: itinerariesReducer,
    authReducer: authReducer,
    activityReducer: activityReducer,
})

export default mainReducer