import React from "react";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function NavBar(){
    return(
        <Navbar bg="light">
            <Container fluid>
                <Nav.Link>Home</Nav.Link>
                <Nav.Link>Study</Nav.Link>
                <Nav.Link>Quiz</Nav.Link>
            </Container>
        </Navbar>
        
    )
}

export default NavBar;