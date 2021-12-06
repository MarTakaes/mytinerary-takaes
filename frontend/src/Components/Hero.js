import React from "react"
import Button from 'react-bootstrap/Button'
import Container from "react-bootstrap/esm/Container"

const Hero =()=>{
    
        return(
          <>
              <img id="hero" src="./assets/bgcompleto.jpg" alt="hero bg" />
              <Container className="Hero">
                 <div id="herotext d-flex">
                  <div id="title">
                      <h2>MyTinerary</h2>
                  </div>
                  <div id="lecture">
                      <h3>Find your perfect trip <br></br>
                        designed by insiders who know and love their cities!</h3> 
                  </div>
                  <div id="btntrp">
                  <Button id="btntrip" variant="light"><a href="/Cities" >Plan your next road trip</a></Button>
                  </div>
                 </div> 
                 </Container>
                 
                  <div id="text">
                      <h4>"Travel is fatal to bigotry, prejudice and <br></br>narrow mindedness."
                    <br></br>  -Mark Twain</h4>
                    </div> 
                  <div>
                  <p id="popular"> Popular MyTineraries</p>
                  </div>
      </>
        )
    

}
export default Hero