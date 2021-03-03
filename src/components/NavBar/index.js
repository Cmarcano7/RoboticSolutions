import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Button, Nav} from 'react-bootstrap';
import logo from '../../images/LeoniLogo.png';

function NavBar() {
    return(
        <Navbar collapseOnSelect bg="light" variant="light" expand="lg" fixed='top'>
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
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    </Nav>
                    <Nav className='justify-content-end'>
                        <Navbar.Text className='mr-sm-3' id="logInInfo">
                            Signed in as: Mark Otto {/* This is where login name goes */}
                        </Navbar.Text>
                        <Button size="sm" id="SignOutBtn" variant="outline-dark">Sign Out</Button>
                    </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavBar;