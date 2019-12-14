import React from "react";
import './Footer.css'
import {Col, Container, Row} from "react-bootstrap";

import instagramLogo from './assets/SocialIcons/Instagram/white.svg'
import vkLogo from './assets/SocialIcons/VK/white.svg'
import telegramLogo from './assets/SocialIcons/Telegram/white.svg'
import viberLogo from './assets/SocialIcons/Viber/white.svg'

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
                                <div className="social-icons">
                                    <div className="icon shadow-on-hover">
                                        <a href="https://www.instagram.com/favto_avtorazbor/" target="_blank" rel="noopener noreferrer">
                                            <img src={instagramLogo} alt=""/>
                                        </a>
                                    </div>
                                    <div className="icon shadow-on-hover">
                                        <a href="https://vk.com/favtoby" target="_blank" rel="noopener noreferrer">
                                            <img src={vkLogo} alt=""/>
                                        </a>
                                    </div>
                                    <div className="icon shadow-on-hover">
                                        <a href="https://telegram.org/" target="_blank" rel="noopener noreferrer">
                                            <img src={telegramLogo} alt=""/>
                                        </a>
                                    </div>
                                    <div className="icon shadow-on-hover">
                                        <a href="https://www.viber.com/ru/" target="_blank" rel="noopener noreferrer">
                                            <img src={viberLogo} alt=""/>
                                        </a>
                                    </div>
                                </div>

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