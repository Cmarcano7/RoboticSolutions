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
            <div className="mainFooter">  
                <Navbar bg="light" expand="lg" fixed='bottom'>
                    <Nav className="container-fluid">
                        <Version />
                        <Nav.Item className="ml-auto">
                        <Button size="sm" id = "NewItem" variant="outline-dark" onClick={routeChange}>New Line Item</Button>
                        </Nav.Item>
                    </Nav>
                </Navbar>
            </div>
        )
}

export default MainFooter;
