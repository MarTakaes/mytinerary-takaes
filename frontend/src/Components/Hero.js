import React from "react"
import Button from 'react-bootstrap/Button'

const Hero =()=>{
    
        return(
            <div>
              <img id="hero" src="./assets/bgimage.jpg" alt="hero wallpaper"/>
              <div id="hero3">
                <img id="hero1" src="./assets/hero1.jpg" alt="hero img cut"/>
                <img id="hero2" src="./assets/hero2.jpg" alt="hero img cut 2"/>
              </div>
              <h2>MyTinerary</h2>
              <Button variant="light">Light</Button>
            </div>
        )
    

}
export default Hero