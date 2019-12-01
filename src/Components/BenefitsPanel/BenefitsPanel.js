import React from "react";
import './BenefitsPanel.css'
import {Col, Container, Row} from "react-bootstrap";
import BenefitsItem from "../BenefitsItem";

const BenefitsPanel = (props) => {

    const {title = 'title', benefitsPanelItems = []} = props;

    const benefitsPanelElements = benefitsPanelItems.map(it => (
        <Col key={`benefit-item-col-${it.id}`} sm={12} md={3} lg={3}>
            <BenefitsItem
                key={`benefit-item-${it.id}`}
                img={it.img}
                title={it.title}
                text={it.text}
            />
        </Col>
    ));

    return (
        <div className="benefits-panel">
            <Container>

                <Row>
                    <Col>
                        <div className="title-container">
                            <h1>{title}</h1>
                        </div>
                    </Col>
                </Row>
                
                <Row className="benefit-items-container">
                    {benefitsPanelElements}
                </Row>

            </Container>
        </div>
    )
};

export default BenefitsPanel