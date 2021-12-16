import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoggingButton from "./Userimage";
import OffCanvasExample from "./OffCanvas";

export default class MainNav extends React.Component{

  render (){
   return (
    <Navbar id="nav" expand="md">
    <Container >
       <Navbar.Toggle />
        <Navbar.Collapse className="center">
        <Link id="Navletter" to="/">Home</Link>
        <img id="Logo" src="../assets/logo.png" alt="logo"/>
        <Link id="Navletter" to="/Cities">Cities</Link>
        <Nav.Item className="ms-auto"><OffCanvasExample placement = "end"/></Nav.Item>
      </Navbar.Collapse>
    </Container>
  </Navbar>
   
    )
  }
}


