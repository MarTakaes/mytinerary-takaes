import {GoogleLogin} from 'react-google-login';

function GoogleButton (){

    const responseGoogle = (response) => {
        console.log(response);
      }

    return(
        <>
        
        <GoogleLogin
    clientId="537200634023-i15m1lbqctne823rf19paql33auqf761.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
    />
        </>
    )
    

}

export default GoogleButton