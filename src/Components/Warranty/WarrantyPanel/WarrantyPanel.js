import React from "react";
import './WarrantyPanel.css'
import {Col, Container, Row} from "react-bootstrap";
import WarrantyItem from "../WarrantyItem";
import Button from "../../Button";

const WarrantyPanel = (props) => {
    const {title = 'title', warrantyPanelItems = []} = props;

    const warrantyPanelElements = warrantyPanelItems.map(it => (
        <Col key={`warranty-item-col-${it.id}`} sm={12} md={3} lg={3}>
            <WarrantyItem
                key={`warranty-item-${it.id}`}
                days={it.days}
                text={it.text}
            />
        </Col>
    ));

    return (
        <div className="warranty-panel">
            <Container>

                <Row>
                    <Col>
                        <h1>{title}</h1>
                    </Col>
                </Row>

                <Row className="content">
                    {warrantyPanelElements}
                </Row>

                <Row className="justify-content-center button-container no-gutters">
                    <Col sm={12} md={true} lg={true}>
                        <Button
                            label="Подробнее"
                            href="warranty"
                        />
                    </Col>
                </Row>

            </Container>

        </div>
    )
};

export default WarrantyPanel