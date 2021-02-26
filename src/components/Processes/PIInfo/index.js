import React from 'react';
import {} from 'react-router-dom';
import {Row, Col, Form} from 'react-bootstrap';

function PlantIntegration() {
    return(
        <Form id='integration'>
            <h5 id='Stages'>Plant & Integrator Infomation</h5>
            <Form.Group as={Row}  controlId='formRobotType'>
                <Form.Label id='inputLabels'column sm={3.5}>Robot Type/Model:</Form.Label>
                <Col sm={8.5}>
                <Form.Control size='sm' type='RobotType' placeholder='' />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId='formRobotApp'>
                <Form.Label id='inputLabels'column sm={2}>Robot Application:</Form.Label>
                <Col sm={10}>
                <Form.Control size='sm' type='RobotApp' placeholder='' />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId='formSerialNum'>
                <Form.Label id='inputLabels'column sm={2}>Serial Number/F #:</Form.Label>
                <Col sm={10}>
                <Form.Control size='sm' type='serialNum' placeholder='' />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId='formCPL'>
                <Form.Label id='inputLabels'column sm={2}>Customer & Plant Location:</Form.Label>
                <Col sm={10}>
                <Form.Control size='sm' type='CPL' placeholder='' />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId='formInLO'>
                <Form.Label id='inputLabels'column sm={2}>Integrator/ Line Owner:</Form.Label>
                <Col sm={10}>
                <Form.Control size='sm' type='InLO' placeholder='' />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId='formStaRobId'>
                <Form.Label id='inputLabels'column sm={2}>Station / Robot ID:</Form.Label>
                <Col sm={10}>
                <Form.Control size='sm' type='StaRobId' placeholder='' />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId='formSysLine'>
                <Form.Label id='inputLabels'column sm={2}>System / Line:</Form.Label>
                <Col sm={10}>
                <Form.Control size='sm' type='SysLine' placeholder='' />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId='formLeoniPD'>
                <Form.Label id='inputLabels'column sm={2}>Leoni PD#:</Form.Label>
                <Col sm={10}>
                <Form.Control size='sm' type='LeoniPD' placeholder='' />
                </Col>
            </Form.Group>
        </Form>
    )
}
export default PlantIntegration;