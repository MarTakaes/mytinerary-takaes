import authActions from '../redux/actions/authActions'
import {connect} from 'react-redux'
import { useRef} from "react"
import GoogleLogin from 'react-google-login'
import {Link, useNavigate} from "react-router-dom"

function SignIn (props) {
    let navigate = useNavigate()
    const responseGoogle = (res) => {
        props.signIn(
            res.profileObj.email,
            res.profileObj.googleId,
            true
        )
    }
    localStorage.getItem("token") && !props.token && props.signToken()
    
    props.token && navigate("/", {replace: true})
    
    const email = useRef()
    const password = useRef()

    function handleSignUp(e){
        e.preventDefault()
        props.signIn(
            email.current.value,
            password.current.value,
        )
        email.current.value = ""
        password.current.value = ""
    }
    return(
        <div className='signinform'>
            <img id="bgsign" src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="bg"/>
            <div className="formulario">
                <h2 className='titulosup'>Sign in MyTinerary now</h2>
                <form className="formulario" onSubmit={handleSignUp}>
                    <div className="inputs">
                        <input id="input" type="text" ref={email} className="input" name="email" placeholder="Email"  required/>
                        <input id="input" type="password" ref={password} className="input" name="password" placeholder="Password"  required/>
                    </div>
                    <div className='submit'>
                        <input className='btn-submit' type="submit" value="Submit" />
                    </div>
                </form>
                <div id="google">
                <GoogleLogin 
                        clientId="113911854537-8j68k30a4qpl884ffcvk7hvdfmsdlfnc.apps.googleusercontent.com"
                        buttonText="Sign in with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                />
                </div>
                <div className='account'>
                    <p className='texto-sign'>You don't have an account yet?</p>
                    <Link to="/signup" className='btn-sign'>
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    signToken: authActions.signToken,
    signIn: authActions.signIn
}

const mapStateToProps = (state) => {
    return {
        token: state.authReducer.token
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(SignIn)