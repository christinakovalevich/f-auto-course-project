import React from "react";
import './JobOfferPanel.css'
import {Col, Container, Row} from "react-bootstrap";
import JobOfferItem from "../JobOfferItem";

const JobOfferPanel = (props) => {
    const {title='title', jobOfferItems} = props;

    const warrantyPanelElements = jobOfferItems.map(it => (
        <Col key={`job-offer-item-col-${it.id}`} sm={12} md={true} lg={true}>
            <JobOfferItem
                key={`job-offer-item-${it.id}`}
                id={it.id}
                title={it.title}
                salary={it.salary}
                functions={it.functions}
            />
        </Col>
    ));

    return (
        <div id="job-offer-panel" className="job-offer-panel panel panel-grey">
            <Container>
                <Row>
                    <Col>
                        <h1>{title}</h1>
                    </Col>
                </Row>

                <Row className="content">
                    {warrantyPanelElements}
                </Row>
            </Container>
        </div>
    )
};

export default JobOfferPanel