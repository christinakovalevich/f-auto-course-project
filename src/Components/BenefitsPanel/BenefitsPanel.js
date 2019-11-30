import React from "react";
import './BenefitsPanel.css'
import {Col, Container, Row} from "react-bootstrap";

import benefitItemImg1 from './assets/benefit-item-1.svg';
import benefitItemImg2 from './assets/benefit-item-2.svg';
import benefitItemImg3 from './assets/benefit-item-3.svg';
import benefitItemImg4 from './assets/benefit-item-4.svg';

const BenefitsPanel = () => {

    return (
        <div className="benefits-panel">
            <Container>
                <Row>
                    <Col>
                        <div className="title-container">
                            <h1>Почему люди выбирают нас</h1>
                        </div>
                    </Col>
                </Row>

                <Row className="benefit-items-container">
                    <Col sm={12} md={3} lg={3}>
                        <BenefitItem
                            img={benefitItemImg1}
                            title="Быстрый поиск и доставка"
                            text="Бахните текст про этот плюс на две или три строчки-строчечки"
                        />
                    </Col>
                    <Col sm={12} md={3} lg={3}>
                        <BenefitItem
                            img={benefitItemImg2}
                            title="Тысячи довольных клиентов"
                            text="Бахните текст про этот плюс на две или три строчки-строчечки"
                        />
                    </Col>
                    <Col sm={12} md={3} lg={3}>
                        <BenefitItem
                            img={benefitItemImg3}
                            title="Самые доступные цены"
                            text="Бахните текст про этот плюс на две или три строчки-строчечки"
                        />
                    </Col>
                    <Col sm={12} md={3} lg={3}>
                        <BenefitItem
                            img={benefitItemImg4}
                            title="Гарантия на все запчасти"
                            text="Бахните текст про этот плюс на две или три строчки-строчечки"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

const BenefitItem = (props) => {

    const {img, title, text} = props;

    return (
        <div className="benefit-item">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col">
                    </div>
                    <div className="col">
                        <img src={img} alt=""/>
                    </div>
                    <div className="col">
                    </div>
                </div>
            </div>
            <div className="title">
                {title}
            </div>
            <div className="text">
                {text}
            </div>
        </div>
    )
};

export default BenefitsPanel