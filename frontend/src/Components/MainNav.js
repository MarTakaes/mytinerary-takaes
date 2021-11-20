import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoggingButton from "./Userimage";

export default class MainNav extends React.Component{

  render (){
   return (
    <Navbar id="nav">
    <Container >
       <Navbar.Toggle />
        <Navbar.Collapse className="center">
        <Nav.Link id="Navletter" href="#Home">Home</Nav.Link>
        <img id="Logo" src="./assets/logo.png" alt="logo"/>
        <Nav.Link id="Navletter" href="#Cities">Cities</Nav.Link>
        <Nav.Link className="ms-auto">
         <a href="#login" > <LoggingButton /></a>
        </Nav.Link>
      </Navbar.Collapse>
    </Container>
  </Navbar>
   
    )
  }
}


