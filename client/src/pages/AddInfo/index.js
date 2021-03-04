import React, { Component, useState, useEffect } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import {useHistory} from 'react-router-dom';
import Optimization from '../../components/Processes/Optimization';
import Validation from '../../components/Processes/Validiation';
import Notes from '../../components/Notes';
import Version from '../../components/VersionInfo';
import '../../components/process.css';
import API from '../../utils/API'

    function Info() {
        
        const [formObject, setFormObject] = useState({
            robotModel: "",
            robotApplication: "",
            serialNumber: "",
            endUser: "",
            integrator: "",
            stationID: "",
            system: "",
            partDescriptionNumber: ""
        });

        const history = useHistory();
    
        const routeChange = () =>{ 
            let path = `/`; 
            history.push(path);
        };

        function handleInputChange(event) {
            const { name, value } = event.target;
            setFormObject({...formObject, [name]: value})
        };

        function handleFormSubmit(event) {
            event.preventDefault();
              API.saveInfo({
                robotModel: formObject.robotModel,
                robotApplication: formObject.robotApplication,
                serialNumber: formObject.serialNumber,
                endUser: formObject.endUser,
                integrator: formObject.integrator,
                stationID: formObject.stationID,
                system: formObject.system,
                partDescriptionNumber: formObject.partDescriptionNumber
              },
              console.log(formObject)
              )
                .then(() => setFormObject({
                    robotModel: "",
                    robotApplication: "",
                    serialNumber: "",
                    endUser: "",
                    integrator: "",
                    stationID: "",
                    system: "",
                    partDescriptionNumber: ""
                },
                ))
                .catch(err => console.log(err));
            
        };

        return (
            <div>
                <Container id="addInfo">
                    <div className='container fluid'>
                        <div className='row'>
                            <div className='col-sm'>   
                                <form id='integration'>
                                <h5  id='Stages'>Plant & Integrator Information</h5>
                                    <div id='formGroup'className='formLabel-group'>
                                        <label id='formLabel'>
                                        Robot Type/Model:</label>
                                        <input 
                                        type="text"
                                        onChange={handleInputChange}
                                        name="robotModel"
                                        placeholder="Robot Model (required)"
                                        value={formObject.robotModel} 
                                        />
                                    </div>
                                    <div id='formGroup'className='formLabel-group'>
                                        <label id='formLabel'>
                                        Robot Application:</label>
                                        <input 
                                        type="text"
                                        onChange={handleInputChange}
                                        name="robotApplication"
                                        placeholder="Robot Application (required)"
                                        value={formObject.robotApplication} 
                                        />
                                    </div>
                                    <div id='formGroup'className='formLabel-group'>
                                        <label id='formLabel'>
                                        Serial Number/F #:</label>
                                        <input 
                                        type="text" 
                                        onChange= {handleInputChange}
                                        name="serialNumber"
                                        placeholder="Serial Number (required)"
                                        value={formObject.serialNumber}
                                        />
                                    </div>
                                    <div id='formGroup'className='formLabel-group'>
                                        <label id='formLabel'>
                                        Customer & Plant Location:</label>
                                        <input 
                                        type="text" 
                                        onChange= {handleInputChange}
                                        name="endUser"
                                        placeholder="End User (required)"
                                        value={formObject.endUser}
                                        />
                                    </div>
                                    <div id='formGroup'className='formLabel-group'>
                                        <label id='formLabel'>
                                        Integrator/Line Owner:</label>
                                        <input 
                                        type="text" 
                                        onChange= {handleInputChange}
                                        name="integrator"
                                        placeholder="Integrator (required)"
                                        value={formObject.integrator}
                                        />
                                    </div>
                                    <div id='formGroup'className='formLabel-group'>
                                        <label id='formLabel'>
                                        Station/Robot ID:</label>
                                        <input 
                                        type="text" 
                                        onChange= {handleInputChange}
                                        name="stationID"
                                        placeholder="Station ID"
                                        value={formObject.stationID}
                                        />
                                    </div>
                                    <div id='formGroup'className='formLabel-group'>
                                        <label id='formLabel'>
                                        System/Line:</label>
                                        <input 
                                        type="text"
                                        onChange= {handleInputChange}
                                        name="system"
                                        placeholder="System"
                                        value={formObject.system}
                                        />
                                    </div>
                                    <div style={{marginTop:15}} id='formGroup'className='formLabel-group'>
                                        <label id='formLabel'>
                                        Leoni PD#:</label>
                                        <input 
                                        type="text" 
                                        onChange= {handleInputChange}
                                        name="partDescriptionNumber"
                                        placeholder="PD Number (required)"
                                        value={formObject.partDescriptionNumber}
                                        />
                                    </div>
                                </form>
                            </div>
                            
                            <div className='col-sm'> 
                            <Optimization />
                            </div>
                            
                            <div className='col-sm'> 
                            <Validation />
                            </div>
                        </div>
                    
                        <div className='row'>
                        <div className='col-12'>
                        <Notes />
                        </div>
                        </div>
                    </div>
                </Container>
            
                <footer id='footer'>
                    <Navbar collapseOnSelect expand="lg" bg="light" fixed='bottom'>
                        <Version />
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                            </Nav>
                            <Nav className='justify-content-end'>
                                <Button className='mr-sm-3' size="sm" id="UpdateBtn" variant="outline-dark" onClick={routeChange}>Back</Button>
                                <Button className='mr-sm-5' size="sm" id='AddBtn' variant="outline-dark" 
                                disabled={!(formObject.robotModel && formObject.robotApplication && formObject.serialNumber && formObject.endUser && formObject.integrator && formObject.partDescriptionNumber)}
                                onClick={handleFormSubmit}>Add</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </footer>
            </div>
        );

    }

            
export default Info;