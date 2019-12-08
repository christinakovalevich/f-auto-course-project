import React from "react";
import './Footer.css'
import {Col, Container, Row} from "react-bootstrap";

const Footer = (props) => {
    const {logo = 'LOGO'} = props;
    return (
        <footer>
            <Container>
                <Row>
                    <Col>
                        <h1>{logo}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={true} lg={true}>
                        <div className="item-container">
                            <div className="item">
                                По вопросам заказа
                                <br/>
                                <a href="tel:+375291384234">+375 (29) 138 42 34</a>
                            </div>

                            <div className="item">
                                По любым вопросам
                                <br/>
                                <a href="mailto:f-auto@yandex.by">f-auto@yandex.by</a>
                            </div>

                            <div className="item">
                                Мы в соц.сетях
                                <br/>
                            </div>
                        </div>

                    </Col>

                    <Col sm={12} md={true} lg={true}>
                        <div className="item-container">
                            <div className="item">
                                <a href="aboutUs">О нас</a>
                            </div>

                            <div className="item">
                                <a href="products">Каталог</a>
                            </div>

                            <div className="item">
                                <a href="blog">Блог</a>
                            </div>

                            <div className="item">
                                <a href="contacts">Контакты</a>
                            </div>
                        </div>
                    </Col>

                    <Col sm={12} md={true} lg={true}>
                        <div className="item-container">
                            <div className="item">
                                <a href="clients">Покупателям</a>
                            </div>

                            <div className="item">
                                <a href="howToOrder">Как сделать заказ</a>
                            </div>

                            <div className="item">
                                <a href="certificates">Сертификаты качества</a>
                            </div>

                            <div className="item">
                                <a href="discount">Акции и предложения</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};

export default Footer