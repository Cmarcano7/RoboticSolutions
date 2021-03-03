import React, { Component } from "react";
import MainFooter from "../../components/MainFooter";
import DataSheet from "../../components/DataSheet";
import { Container } from "react-bootstrap";

    class MainTable extends Component {
        render() {
            return (
                <div>
                <Container id='mainInfo'>
                    <DataSheet/>                    
                </Container>
                <footer>
                    <MainFooter />
                </footer>
                </div>
            );
        }
    }

export default MainTable;