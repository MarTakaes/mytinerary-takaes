import React, {Component} from 'react'
import MainNav from "../Components/MainNav"
import Footer from '../Components/Footer'
import SignInComponent from '../Components/SignInComponent'

class SignIn extends Component  {
    render(){
        return (
            <>
              <MainNav/>
              <SignInComponent/>
              <Footer/>
            </>    
        )
    }
}

export default SignIn