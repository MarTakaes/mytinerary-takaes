import React, {Component} from 'react'
import MainNav from "../Components/MainNav"
import Footer from '../Components/Footer'
import SignUpComponent from '../Components/SignUpComponent'

class SignIn extends Component  {
    render(){
        return (
            <>
              <MainNav/>
              <SignUpComponent/>
              <Footer/>
            </>    
        )
    }
}

export default SignIn