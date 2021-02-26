import React from 'react';
import {} from 'react-router-dom';
import {Row, Col, Form} from 'react-bootstrap';

function Validation() {
    return(
        <Form id='Stages' fluid='md'>
            <h5>Validation</h5>
            <Form.Group as={Row}  controlId='formVLFR'>
                <Form.Label id='inputLabels'column sm={2}>Validation Location:</Form.Label>
                <Col sm={10}>
                <Form.Control size='sm' type='VLFR' placeholder='' />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId='formDOVFR'>
                <Form.Label id='inputLabels'column sm={2}>Date of Validation:</Form.Label>
                <Col sm={10}>
                <Form.Control size='sm' type='DOVFR' placeholder='' />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId='formLTPVFR'>
                <Form.Label id='inputLabels'column sm={2}>Leoni Technician who Performed Validation:</Form.Label>
                <Col sm={10}>
                <Form.Control size='sm' type='LTPVFR' placeholder='' />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId='formAUIFR'>
                <Form.Label id='inputLabels'column sm={2}>Any Unresolved Issues Y/N:</Form.Label>
                <Col sm={10}>
                <Form.Control size='sm' type='AUIFR' placeholder='' />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId='formDIRVIFR'>
                <Form.Label id='inputLabels'column sm={2}>Date Integrator Resolved Validation Issues:</Form.Label>
                <Col sm={10}>
                <Form.Control size='sm' type='DIRVIFR' placeholder='' />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId='formSWEDFR'>
                <Form.Label id='inputLabels'column sm={2}>SOP / Warranty Effective Date:</Form.Label>
                <Col sm={10}>
                <Form.Control size='sm' type='SWEDFR' placeholder='' />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId='formWEDFR'>
                <Form.Label id='inputLabels'column sm={2}>Warranty Expiration Date:</Form.Label>
                <Col sm={10}>
                <Form.Control size='sm' type='WEDFR' placeholder='' />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId='formFIDFR'>
                <Form.Label id='inputLabels'column sm={2}>Final Inspection Date:</Form.Label>
                <Col sm={10}>
                <Form.Control size='sm' type='FIDFR' placeholder='' />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId='formRPVDPNFR'>
                <Form.Label id='inputLabels'column sm={2}>Robot Programs Verified Document Program Names:</Form.Label>
                <Col sm={10}>
                <Form.Control size='sm' type='RPVDPNFR' placeholder='' />
                </Col>
            </Form.Group>
        </Form>
    )
}
export default Validation;