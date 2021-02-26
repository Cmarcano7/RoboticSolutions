import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Button, Nav} from 'react-bootstrap';
import logo from '../../images/LeoniLogo.png';

function NavBar() {
    return(
            <Navbar bg="light" variant="light" expand="lg" position='top'>
            <Nav className="container-fluid">
                <Nav.Item>
                <Navbar.Brand as={Link} to ='/'><img
                src={logo}
                width ="100"
                height="40"
                className="d-inline-block align-top"
                alt="Leoni Logo"
                />
                <br />
                <Navbar.Text id="division">
                    Buisness Unit "Robotic Solutions"
                </Navbar.Text>
                </Navbar.Brand>
                </Nav.Item>
                <Nav.Item className="ml-auto">
                    <Button size="sm" id="SignOutBtn" variant="outline-dark">Sign Out</Button>
                    <br />
                    <Navbar.Text id="logInInfo">
                        Signed in as: Mark Otto {/* This is where login name goes */}
                    </Navbar.Text>
                </Nav.Item>
                </Nav>
            </Navbar>
    )
}
export default NavBar;