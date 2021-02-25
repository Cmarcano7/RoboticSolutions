import React, {Component} from 'react';
import {} from 'react-router-dom';
import {Row, Col, Card, Container} from 'react-bootstrap';
import PlantIntegration from '../Processes/PIInfo';
import Optimization from '../Processes/Optimization';
import Validation from '../Processes/Validiation';
import Notes from '../Notes';

class AddInfoGroup extends Component {
    render() {
    return(
        <Container fluid>
            <Row>
                <Card style={{margin: 15, border: 0, width: '20 rem'}}>
                <PlantIntegration />
                </Card>
                <Card style={{border: 0, width: '15 rem'}}>
                <Optimization />
                </Card>
                <Card style={{border: 0, width: '15 rem'}}>
                <Validation />
                </Card>
            </Row>
            <Notes />
        </Container>
    )
}
}
export default AddInfoGroup;