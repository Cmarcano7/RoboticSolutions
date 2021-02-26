import React from 'react';
import {} from 'react-router-dom';
import {Form} from 'react-bootstrap';

function Notes() {
    return(
        <Form>
                        <Form.Group controlId="notesField">
                        <Form.Label id='inputLabels' size='sm'>Notes</Form.Label>
                        <Form.Control size='sm' as="textarea" rows={5} />
                    </Form.Group>
                </Form>
    )
}
export default Notes;