import React from "react";
import "./NavBar.css"
import Nav from 'react-bootstrap/Nav'
// import NavBar from 'react-bootstrap/NavBar';
import Container from 'react-bootstrap/Container';
import { Navbar } from "react-bootstrap";


function NavBar(){
    return(
        <Navbar bg="light" fixed="top" className="global-nav">
            <Container fluid>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/study">Study Mode</Nav.Link>
                <Nav.Link href="/quiz">Quiz Mode</Nav.Link>
            </Container>
        </Navbar>
        
    )
}

export default NavBar;