import React, { Component } from "react";
import { Container } from "react-bootstrap";
import AddInfoGroup from "../../components/AddInfo";
import AddInfoFooter from "../../components/AddInfoFooter";

    class AddInfo extends Component {
        render() {
            return (
             <div>
                <Container id="addInfo">
                    <AddInfoGroup/>
                </Container>
                <footer id='footer'>
                <AddInfoFooter />
                </footer>
            </div>
            );
        }
    }

export default AddInfo;