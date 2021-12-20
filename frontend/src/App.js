import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Cities from './Pages/Cities';
import City from './Pages/City';
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp"
import { connect } from "react-redux";
import authActions from "./redux/actions/authAction";
import { useEffect } from "react";

function App(props) {
  const { authUser } = props;
  useEffect(() => {
    authUser();
  }, [authUser]);
  return (
    <BrowserRouter>
    <Routes>    
         <Route path="/" element={<Home />}/>   
         <Route path="/Cities" element={<Cities />}/>         
         <Route path="/City/:id" element={<City />}/>
         <Route path="signin" element={<SignIn />} />
         <Route path="signup" element={<SignUp />} />
    </Routes>
    </BrowserRouter>
  );
}


const mapStateToProps = (state) => {
  return {
    user: state.authReducer.response,
  };
};

const mapDispatchToProps = {
  authUser: authActions.authUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);