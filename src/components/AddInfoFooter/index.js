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
            <div className="addInfoFooter">  
                <Navbar bg="light" expand="lg" >
                    <Nav className="container-fluid">
                        <Version />
                        <Nav.Item className="ml-auto">
                        <Button size="sm" id = "UpdateBtn" variant="outline-dark" onClick={routeChange}>Update</Button>
                        <Button size="sm" id = "AddBtn" variant="outline-dark" onClick={routeChange}>Add</Button>
                        </Nav.Item>
                    </Nav>
                </Navbar>
            </div>
        )
}
export default AddInfoFooter;