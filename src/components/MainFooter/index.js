import React from 'react';
import {useHistory} from 'react-router-dom';
import {Navbar, Nav, Button} from 'react-bootstrap';
import Version from '../VersionInfo';

function MainFooter() {

const history = useHistory();

  const routeChange = () =>{ 
    let path = `/add`; 
    history.push(path);
    }

        return(
            <Navbar collapseOnSelect expand="lg" bg="light" fixed='bottom'>
                <Version />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">               
                    <Nav className="mr-auto">
                        </Nav>
                        <Nav className='justify-content-end'>
                        <Button size="sm" id="NewItem" variant="outline-dark" onClick={routeChange}>New Line Item</Button>
                        </Nav>
                        </Navbar.Collapse>
            </Navbar>
        )
}

export default MainFooter;
