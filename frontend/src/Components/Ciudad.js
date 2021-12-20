import {useEffect} from "react"
import {connect} from "react-redux"
import citiesAction from "../redux/actions/citiesAction"
import {useParams} from "react-router-dom"
import Itinerary from "../Components/Itineraries"

function Ciudad(props) {
  const params = useParams()

  useEffect(() => {
    //asi no se hace el loop infinito. compDidmount
    !props.cities[0] && props.getCities() //si no existen cities, traelas
    props.cities[0] && props.findCity(props.cities, params.id) //si existe cities, encontrame una ciudad por id (los paranms)
    props.getItinerariesByCityId(params.id)
  }, [props.cities]) //c/vez q se atualiza props.cities: se ejecuta useEff
  console.log(props)
  const back = {
    backgroundImage: `url(${props.city.src})`,
    width: "100%",
    height: "70vh",
    "background-repeat": "no-repeat",
    "background-position": "center",
    "background-size": "cover",
    "z-index": "-1",
  }

  return (
    <>
    <div className="fondo-itinerario">
      {props.city && 
      <>
        <div style={back}></div>
        <h1 id="text1">{props.city.name}</h1>
        <p id="text2">{props.city.description}</p>
      </>}
     
      {props.itineraries[0] ? (
        <Itinerary itineraries={props.itineraries} />
      ) : (
        <h1 id="donot">We do not have itineraries for this city yet, coming soon on tuesday 12/14!</h1>
      )}
    </div>
    </>
  )
}

const mapDispatchToProps = {
  //las acciones los guarda en las props
  getCities: citiesAction.getCities,
  findCity: citiesAction.findCity,
  getItinerariesByCityId: citiesAction.getItinerariesByCityId,
}

const mapStateToProps = (state) => {
  //trae los estados  q estan en el reducer y lo manda a props
  return {
    cities: state.citiesReducer.cities,
    city: state.citiesReducer.city,
    itineraries: state.citiesReducer.itineraries,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Ciudad)