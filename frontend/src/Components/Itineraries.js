import {Button, Collapse} from "react-bootstrap"
import {useState} from "react"

export default function Itinerary(props) {
  const [open, setOpen] = useState(false)

  function precio(price) {
    return Array.from({length: price})
  }

  return (
    <>
      {
       props.itineraries.map((itinerary, index) => (
         <div className="div1">
          <div key={index} className="itinerarioCard">
            <h2 id="itinerariotext">{itinerary.itineraryName}</h2>
            <img className="singleCard" variant="top" src={itinerary.userImg} alt="user img"/>
            <h3>{itinerary.userName}</h3>
            <div className="letra">
                <span> Likes: {itinerary.likes} ❤️</span> <br></br>
              <span>Duration: {itinerary.duration} hs</span><br></br>
              {precio(itinerary.price).map(() => (
                <span>💵</span>
               ))}
             
            </div>
            <div>
              {itinerary.hashtag.map((hash) => (
                <span> #{hash}</span>
              ))}
            </div>
            <div>
              <Button
                className="btn-warning p-1 fs-6 fw-normal m-1"
                onClick={() => setOpen(!open)}
                aria-controls="example-fade-text"
                aria-expanded={open}
              >
                {!open ? "View more" : "View less"}
              </Button>
              <Collapse in={open}>
                <div id="example-collapse-text">
                  Under construction
                </div>
              </Collapse>
             
            </div>
          </div>
          </div>
        ))}
    </>
  )
}