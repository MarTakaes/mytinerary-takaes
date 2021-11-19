import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoggingButton from "./Userimage";

export default class Nav extends React.Component{

  render (){
   return (
    <Navbar id="nav" variant="dark">
    <Container>
      <Navbar.Toggle />
      <img id="Logo" src="./assets/logo.png" alt="logo"/>
      <Navbar id="Name">MyTinerary</Navbar>
      <Navbar.Collapse className="justify-content-end">
      <Navbar.Brand id="Navletter" href="#Home">Home</Navbar.Brand>
      <Navbar.Brand id="Navletter" href="#Cities">Cities</Navbar.Brand>
        <Navbar.Text>
         <a href="#login"> <LoggingButton /></a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
   
    )
  }
}


