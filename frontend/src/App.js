import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Cities from './Pages/Cities';
import City from './Pages/City';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn'
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import {connect} from "react-redux"
import {useEffect} from "react"
import authActions from './redux/actions/authActions';

function App(props) {
  const { authUser } = props;
  useEffect(() => {
      const token =localStorage.getItem('token')
      if(token){
          authUser();
        }
  }, [authUser]);
  return (
    <BrowserRouter>   
    <ToastContainer autoClose={4000} />
    <Routes>    
         <Route path="/" element={<Home />}/>   
         <Route path="/cities" element={<Cities />}/>         
         <Route path="/city/:id" element={<City />}/>
         <Route path="/signup" element={<SignUp />}/>
         <Route path="/signin" element={<SignIn />}/>        
    </Routes> 
    </BrowserRouter>
  );
}
const mapDispatchToProps ={
  authUser: authActions.signToken
}

export default connect (null,mapDispatchToProps)(App);