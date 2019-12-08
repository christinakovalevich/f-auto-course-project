import React from "react";
import './JobOfferPanel.css'
import {Col, Container, Row} from "react-bootstrap";

const JobOfferPanel = (props) => {

    const {title='title', jobOfferItems} = props;

    return (
        <div className="job-offer-panel panel panel-grey">
            <Container>
                <Row>
                    <Col>
                        <h1>{title}</h1>
                    </Col>
                </Row>

                <Row className="content">
                    {}
                </Row>

                <Row className="justify-content-center button-container no-gutters">
                    <Col sm={12} md={12} lg={12}>

                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default JobOfferPanel