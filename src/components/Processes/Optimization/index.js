import React from 'react';
import {} from 'react-router-dom';
import {Row, Col, Form} from 'react-bootstrap';

function Optimization() {
    return(
        <div>
            <Form>
            <h5 id='Stages'>Optimization</h5>
                <Form.Group as={Row} controlId='formOPIR'>
                <Form.Label id='inputLabels'column sm={2}>Optimization Location:</Form.Label>
                <Col sm={10}>
                <Form.Control size='sm' type='OPIR' placeholder='' />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId='formODIR'>
                <Form.Label id='inputLabels'column sm={2}>Optimization Date:</Form.Label>
                <Col sm={10}>
                <Form.Control size='sm' type='ODIR' placeholder='' />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId='LTOIR'>
                <Form.Label id='inputLabels'column sm={2}>Leoni Technician who performed Optimization:</Form.Label>
                <Col sm={10}>
                <Form.Control size='sm' type='LTOIR' placeholder='' />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId='formACRYNIR'>
                <Form.Label id='inputLabels'column sm={2}>Are Changes Required? Y/N:</Form.Label>
                <Col sm={10}>
                <Form.Control size='sm' type='ACRYNIR' placeholder='' />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId='formDIROIIR'>
                <Form.Label id='inputLabels'column sm={2}>Date Integrator Resolved Optimization Issues:</Form.Label>
                <Col sm={10}>
                <Form.Control size='sm' type='DIROIIR' placeholder='' />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId='formDOCIR'>
                <Form.Label id='inputLabels'column sm={2}>Date Optimization Complete:</Form.Label>
                <Col sm={10}>
                <Form.Control size='sm' type='DOCIR' placeholder='' />
                </Col>
            </Form.Group>
        </Form>
    </div>
    )
}
export default Optimization;