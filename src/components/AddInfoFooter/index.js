import React from 'react';
import {useHistory} from 'react-router-dom';
import {Navbar, Nav, Button} from 'react-bootstrap';
import Version from '../VersionInfo';

function AddInfoFooter() {

    const history = useHistory();
    
    const routeChange = () =>{ 
        let path = `/`; 
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
                        <Button className='mr-sm-3' size="sm" id="UpdateBtn" variant="outline-dark" onClick={routeChange}>Update</Button>
                        <Button className='mr-sm-5' size="sm" id='AddBtn' variant="outline-dark" onClick={routeChange}>Add</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
}
export default AddInfoFooter;