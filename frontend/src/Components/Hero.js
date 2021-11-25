import React from "react"
import Button from 'react-bootstrap/Button'
import Container from "react-bootstrap/esm/Container"

const Hero =()=>{
    
        return(
          <>
              <img id="hero" src="./assets/bgimage.jpg" alt="hero wallpaper"/>
              <Container>
                <div id="hero3" className="title d-flex p-5" >
                  <img id="hero1" src="./assets/hero1.jpg" alt="hero img cut"/>
                  <img id="hero2" src="./assets/hero2.jpg" alt="hero img cut 2"/>
                 </div>
                 <Container>
                 <div id="herotext d-flex">
                  <div id="title">
                      <h2>MyTinerary</h2>
                  </div>
                  <div id="lecture">
                      <h3>Find your perfect trip <br></br>
                        designed by insiders who know and love their cities!</h3> 
                  </div>
                  <div id="btntrp">
                  <Button id="btntrip" variant="light"><a href="#Cities" >Plan your next road trip</a></Button>
                  </div>
                 </div> 
                 </Container>
                 </Container>
                 
                  <div id="text">
                      <h4>"Travel is fatal to bigotry, prejudice and <br></br>narrow mindedness."
                    <br></br>  -Mark Twain</h4>
                    </div>
                    <div id="imgs" >
                    <img id="little2" src="./assets/little2.jpg " alt="second little image"/>
                    <img id="little1" src="./assets/little1.jpg" alt="first little image"/>
                  </div>     
                 
                  <div>
                  <p id="popular"> Popular MyTineraries</p>
                  </div>
      </>
        )
    

}
export default Hero