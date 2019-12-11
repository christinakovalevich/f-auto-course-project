import React from "react";
import './DeliveryPanel.css'
import {Col, Container, Row} from "react-bootstrap";

const DeliveryPanel = (props) => {
    const {title = 'title', mapImg, selfDeliveryOptions = [], deliveryOptions = []} = props;

    const selfDeliveryOptionsList = selfDeliveryOptions.map(it => (
        <div
            key={`self-delivery-option-${it.id}`}
            className="mb-2">
            {`- ${it.text}`}
        </div>
    ));

    const deliveryOptionsList = deliveryOptions.map(it => (
        <div
            key={`self-delivery-option-${it.id}`}
            className="mb-2">
            {`${it.text}`}
        </div>
    ));

    return (
        <div className="delivery-panel panel panel-white">
            <Container>
                <Row>
                    <Col>
                        <h1>{title}</h1>
                    </Col>
                </Row>

                <Row className="mt-4">
                    <Col sm={12} md={true} lg={true}>
                        <div className="mb-4">
                            <h5>Самовывоз:</h5>
                        </div>
                        <div>
                            {selfDeliveryOptionsList}
                        </div>

                        <div className="link mt-4 mb-4">
                            <a href="delivery">Адреса всех пунктов самовывоза</a>
                        </div>
                    </Col>

                    <Col sm={false} md={1} lg={1}>

                    </Col>

                    <Col sm={12} md={true} lg={true}>
                        <div className="mb-4">
                            <h5>Доставка по Беларуси</h5>
                        </div>
                        <div>
                            {deliveryOptionsList}
                        </div>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col sm={12} md={10} lg={10}>
                        <div className="map-img-container">
                            <img src={mapImg} alt=""/>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    )
};

export default DeliveryPanel