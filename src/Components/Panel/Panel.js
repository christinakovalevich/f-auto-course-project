import React from "react";
import './Panel.css'

import {Col, Container, Row} from "react-bootstrap";

const Panel = (props) => {

    const {html, style = {}} = props;

    return (
        <div className="panel">
            <Container>
                <Row>
                    <Col></Col>
                </Row>
            </Container>
            {html}
        </div>
    )
};