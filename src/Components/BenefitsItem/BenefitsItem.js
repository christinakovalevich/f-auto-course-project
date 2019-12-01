import React from "react";
import './BenefitsItem.css'
import {Col, Container, Row} from "react-bootstrap";

const BenefitsItem = (props) => {

    const {img, title, text} = props;

    return (
        <div className="benefit-item">

            <Container>
                <Row className="no-gutters justify-content-center">
                    <Col sm={3} md={3} lg={3}>
                        <img src={img} alt=""/>
                    </Col>
                </Row>
            </Container>

            <div className="title">
                {title}
            </div>

            <div className="text">
                {text}
            </div>
        </div>
    )
};

export default BenefitsItem