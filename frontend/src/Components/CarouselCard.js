import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

function CarrouselCard(props){
    return(
        <>
        {props.list.slice(props.index,props.index+props.imgPerSlide).map((city) => (
                <Col>
              <Card id="card">
                <Card.Img variant="top" src={city.image} />
                <Card.Body>
                  <Card.Title>{city.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
          </>
    )
}

export default CarrouselCard